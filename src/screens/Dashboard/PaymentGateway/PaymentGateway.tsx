import React, { useState, useRef, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { usePaymentGateway } from './Hooks/usePaymentGateway';
import { PaymentGatewayRouteProps, RouteProps } from 'src/types/PaymentGateway';
import { useSelector } from 'react-redux';

const PaymentGateway = ({ route }) => {
    const {
        loading,
        setLoading,
        handleWebViewNavigationStateChange,
    } = usePaymentGateway();

    const { donationData, donationId }:RouteProps = route.params;

    const [encryptedData, setEncryptedData] = useState(null);
    const webViewRef = useRef(null);
    const user = useSelector(state => state.signIn.signData);

    const workingKey = 'A19FE830567F8A024AA0C0EE8B4E9F0E'; // This should not be exposed to the client
    const accessCode = 'AVRC10IF64CA35CRAC'; // Ensure this is the correct access code

    console.log(donationData?.donationAmount,"donationId",donationId,"name",donationData?.name);
    

    // Prepare the plain text data for encryption
    const generateTransactionId = () => {
        const now = new Date();
        const dateTime = now.getFullYear().toString() +
                         (now.getMonth() + 1).toString().padStart(2, '0') +
                         now.getDate().toString().padStart(2, '0') +
                         now.getHours().toString().padStart(2, '0') +
                         now.getMinutes().toString().padStart(2, '0') +
                         now.getSeconds().toString().padStart(2, '0');
        const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
        return `${dateTime}${randomNum}`;
    };
    
    const tid = generateTransactionId();
    
    // Use `tid` in your plainTextData
    const plainTextData = `tid=${tid}&merchant_id=404791&order_id=${tid}&currency=INR&amount=${donationData?.donationAmount }&redirect_url=https://ehundi-api.onrender.com/api/ccAvenue-response&cancel_url=https://ehundi-api.onrender.com/api/ccAvenue-response&language=EN&billing_name=${user?.user?.fullName}&billing_address=NA&billing_city=NA&billing_state=NA&billing_zip=100001&billing_country=INDIA&billing_tel=${user?.user?.phoneNumber}&billing_email=${user?.user?.email}&delivery_name=${user?.user?.fullName}&delivery_address=NA&delivery_city=NA&delivery_state=NA&delivery_zip=100001&delivery_country=INDIA&delivery_tel=${user?.user?.phoneNumber}&merchant_param1=${donationId}&integration_type=iframe_normal&si_type=Fixed&payment_option=OPTUPI`;
    
    useEffect(() => {
        // Function to get the encrypted data from the server
        const getEncryptedData = async () => {
            try {
                const response = await fetch('https://livemanager.in/encryptionHandler/encryptionRequestHandler.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `merchant_data=${encodeURIComponent(plainTextData)}&working_key=${encodeURIComponent(workingKey)}`,
                });
                const data = await response.json();
                if (data.encrypted_data) {
                    setEncryptedData(data.encrypted_data);
                } else {
                    Alert.alert('Encryption Error', data.error || 'Failed to encrypt data.');
                    setLoading(false);
                }
            } catch (error) {
                Alert.alert('Network Error', 'Failed to fetch encrypted data from the server.');
                setLoading(false);
            }
        };

        getEncryptedData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {loading && (
                <ActivityIndicator
                    color="#0000ff"
                    size="large"
                    style={StyleSheet.absoluteFill}
                />
            )}
            {encryptedData && (
                <WebView
                    ref={webViewRef}
                    source={{
                        uri: 'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction',
                        method: 'POST',
                        body: `encRequest=${encodeURIComponent(encryptedData)}&access_code=${accessCode}`,
                    }}
                    onLoadStart={() => setLoading(true)}
                    onLoadEnd={() => setLoading(false)}
                    onNavigationStateChange={handleWebViewNavigationStateChange}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            )}
        </View>
    );
};

export default PaymentGateway;
