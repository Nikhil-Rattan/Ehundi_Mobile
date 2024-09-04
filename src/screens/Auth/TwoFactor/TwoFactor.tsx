import { View, Text, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import { styles } from './TwoFactor.styles';
import commonStyles, { hitSlopProp } from '../../../theme/commonStyles';
import strings from '../../../localization';
import { IMAGES } from '../../../assets';
import { OTPRouteProps } from '../../../types';
import { useTwoFactor } from './Hooks/useTwoFactor';
import OTPTextView from 'react-native-otp-textinput';
import { COLORS } from '../../../theme/colors';
import { CustomButton, Loader } from '../../../components';
import { formatPhoneNumber } from '../../../utlis/helperFunctions';

const TwoFactor = ({ route }: OTPRouteProps) => {
  const {
    input,
    isVerifyDisable,
    isResendButtonDisable,
    resendOtpPress,
    setOtpInput,
    verifyOTP,
    userDetail,
    onBackPress,
    timer,
    loading
  } = useTwoFactor(route.params?.data);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={hitSlopProp}
              onPress={onBackPress}>
              <Image
                source={IMAGES.backIcon}
                style={commonStyles.icon56} />
            </TouchableOpacity>
            <Text style={commonStyles.semiBold16}>{strings.otp.otpVerification}</Text>
          </View>

          <View style={styles.sideContainer}>
            <Text style={[styles.headingTxt, styles.grayColor]}>{strings.otp.verificationCode}</Text>
            <Text style={styles.headingTxt}>{`${strings.placeHolder.countryCodePlaceHolder} ${formatPhoneNumber(userDetail?.phoneNumber ?? '')}`}</Text>
            <OTPTextView
              ref={input}
              containerStyle={styles.otpInputContainer}
              textInputStyle={styles.otpInputStyle}
              offTintColor={COLORS.ECLIPSE}
              tintColor={COLORS.PRIMARY_ORANGE}
              handleTextChange={setOtpInput}
              inputCount={4}
              inputCellLength={1}
            />
            <CustomButton
              title={`${strings.otp.resendOtp} ${timer == '01:00' ? '' : `${strings.otp.in} ${timer}`}`}
              onPress={resendOtpPress}
              btnTxtStyle={{ ...commonStyles.medium12 }}
              isdisable={isResendButtonDisable}
              customizeBtnStyle={styles.resendBtnStyle}
            />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={60}
            style={styles.btnContainer}>
            <CustomButton
              title={strings.otp.next}
              onPress={verifyOTP}
              isdisable={isVerifyDisable}
            />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
      {loading && <View style={[commonStyles.loaderStyle]}>
        <Loader loading={loading ? loading : false} />
      </View>}
    </SafeAreaView>
  );
}

export default TwoFactor;
