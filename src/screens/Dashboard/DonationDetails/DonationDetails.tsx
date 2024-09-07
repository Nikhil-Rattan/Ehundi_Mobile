import React from 'react'
import { SafeAreaView, Image, TouchableOpacity, View, FlatList, Text, ImageBackground, StatusBar, Platform, ScrollView, TextInput } from 'react-native'
import { useDonationDetails } from './Hooks/useDonationDetails';
import commonStyles from '../../../theme/commonStyles';
import { Loader, CustomHeader, CustomInput, CustomButton } from '../../../components';
import { styles } from "./DonationDetails.styles"
import { IMAGES } from '../../../assets';
import { COLORS } from "../../../theme/colors";
import strings from '../../../localization';
import { DonationRouteProps } from 'src/types/DonationDetail';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const DonationDetails = ({ route }) => {
    const { data }: DonationRouteProps = route.params;
    const {
        onProfilePress,
        loading,
        onDonateBtnPress,
        amount,
        setAmount,
        amountError,
        validateAmount
    } = useDonationDetails();


    return (
        <ImageBackground
            source={IMAGES.bgImg}
            style={commonStyles.container}
            imageStyle={commonStyles.fill}
        >
            <StatusBar
                hidden={Platform.OS !== 'ios'}
                barStyle={"dark-content"}
                backgroundColor={COLORS.PRIMARY_WHITE}
            />
            <SafeAreaView style={commonStyles.container}>
                <CustomHeader
                    onRightIconPress={onProfilePress} />
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                >
                    <Text style={styles.donationTxtStyle}>{data?.name?.toUpperCase()}</Text>
                    <Image source={data.image} style={styles.imgStyle} />
                    <Text style={styles.paragraphStlye}>{strings.donationDetail.poojaDonation}</Text>

                    <View style={[styles.inputContainer]}>
                        <View style={[styles.inputContainerView]}>
                            <View style={styles.countryCodeContainer}>
                                <Text style={commonStyles.regular16}>
                                    {strings.placeHolder.rupee}
                                </Text>
                            </View>
                            <View style={styles.inputFlex}>
                                {!amount && (
                                    <Text style={styles.customPlaceholder}>
                                        {strings.placeHolder.INR}
                                    </Text>
                                )}
                                <TextInput
                                    style={{ ...styles.inputStyle }}
                                    value={amount}
                                    onChangeText={(value: string) => {
                                        setAmount(value), validateAmount(value)
                                    }}
                                    keyboardType={'phone-pad'}
                                    maxLength={10}
                                    cursorColor={COLORS.PRIMARY_ORANGE}
                                />
                            </View>
                        </View>
                        {amountError ?
                            <Text style={styles.errorStyle}>
                                {amountError}
                            </Text>
                            : null}

                    </View>
                    <CustomButton
                        title={strings.donationDetail.donateNow?.toUpperCase()}
                        onPress={onDonateBtnPress}
                        customizeBtnStyle={styles.btnBackgroundColor}
                        btnTxtStyle={styles.txtColor} />
                </KeyboardAwareScrollView>
                <SafeAreaView>
                    <Text style={styles.copyRightTxtStyle}>{strings.common.copyRightTxt}</Text>
                </SafeAreaView>
                {loading && <View style={[commonStyles.loaderStyle]}>
                    <Loader loading={loading ? loading : false} />
                </View>}
            </SafeAreaView>
        </ImageBackground>
    )
}

export default DonationDetails