import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import strings from "../../../../localization"
import { Keyboard } from "react-native";
import { showError } from "../../../../utlis/helperFunctions";

export const usePaymentGateway = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(false)
    const [amount, setAmount] = useState<any>(null)
    const [amountError, setAmountError] = useState('')


    const onProfilePress = () => {
        navigation.navigate('Profile')
    };
    const onDonateBtnPress = () => {
        if (amount && amount > 0) {
            Keyboard.dismiss()
            navigation.navigate("ThankYou")
        }
        else {
            setAmountError(strings.error.enterAmount)
        }
    }
    const validateAmount = (value: string) => {
        if (!value) {
            setAmountError('Amount is required');
            return;
        }

        const numericValue = Number(value);
        if (isNaN(numericValue) || numericValue <= 0) {
            setAmountError('Invalid amount');
            return;
        }

        setAmountError('');
    };

    const handleWebViewNavigationStateChange = (navState) => {
        // Handle URL changes here
        const { url } = navState;

        console.log(url);
        
    
        // Example: Check if payment is successful
        if (url.includes('success')) {
          navigation.navigate('ThankYou');
        } else if (url.includes('failed')) {
            showError("Payment failed! Please retry.")
          navigation.navigate('Home');
        }
      };



    return {
        onProfilePress,
        loading,
        amount,
        setAmount,
        amountError,
        setLoading,
        onDonateBtnPress,
        validateAmount,
        handleWebViewNavigationStateChange
    };
};
