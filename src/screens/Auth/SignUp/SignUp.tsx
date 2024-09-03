import { View, Text, StatusBar, ImageBackground, Image, Platform, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { COLORS } from '../../../theme/colors';
import commonStyles from '../../../theme/commonStyles';
import { IMAGES } from '../../../assets';
import { styles } from './SignUp.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomButton, CustomInput, Loader } from '../../../components';
import { useSignUp } from './Hooks/useSignUp';
import strings from '../../../localization';

const Login = () => {
  const {
    formik,
    handleInputChange,
    loading,
    onLoginPress
  } = useSignUp();

  return (
    <View style={commonStyles.container}>
      <StatusBar
        hidden={Platform.OS !== 'ios'}
        barStyle={"dark-content"}
        backgroundColor={COLORS.PRIMARY_WHITE}
      />
      <ImageBackground
        source={IMAGES.bgImg}
        style={commonStyles.container}
        imageStyle={commonStyles.fill}
      >
        <View style={styles.upperContainer} />

        <View style={styles.lowerContainer}>
          <KeyboardAwareScrollView
            bounces={false}
            keyboardShouldPersistTaps='handled'
            extraHeight={-250}
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
          >
            <View style={styles.headerContainer}>
              <Text style={styles.logoTxtStyle}>
                {strings.signUp.signUp}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onLoginPress}>
                <Image source={IMAGES.crossIcon} style={commonStyles.icon20} />
              </TouchableOpacity>
            </View>
            <CustomInput
              label={strings.signUp.fullname}
              value={formik.values.fullName}
              placeholder={strings.placeHolder.fullNamePlaceHolder}
              onChangeText={(value: string) => handleInputChange('fullName', value)}
              errorMessage={formik.errors.fullName ? formik.errors.fullName : ""}
            />
            <CustomInput
              label={strings.signUp.email}
              value={formik.values.email}
              placeholder={strings.placeHolder.emailPlaceHolder}
              onChangeText={(value: string) => handleInputChange('email', value)}
              keyboardType='email-address'
              errorMessage={formik.errors.email ? formik.errors.email : ""}
            />
            <CustomInput
              label={strings.signUp.password}
              value={formik.values.password}
              placeholder={strings.placeHolder.passwordPlaceHolder}
              secureTextEntry={true}
              errorMessage={formik.errors.password ? formik.errors.password : ""}
              onChangeText={(value: string) => handleInputChange('password', value)}
            />
            <CustomInput
              label={strings.signUp.confirmPassword}
              value={formik.values.confirmPassword}
              placeholder={strings.placeHolder.confirmPasswordPlaceHolder}
              secureTextEntry={true}
              errorMessage={formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
              onChangeText={(value: string) => handleInputChange('confirmPassword', value)}
            />
            <CustomButton
              title={strings.signUp.createAccount}
              onPress={() => formik.handleSubmit()}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signUpContainer}
              onPress={onLoginPress}
            >
              <Text style={styles.signUpTxt}>{strings.login.dontHaveAccount}</Text>
              <Text style={[styles.signUpTxt, styles.activeTxt]}>{strings.signUp.login}</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
          <SafeAreaView>
            <Text style={styles.copyRightTxtStyle}>{strings.common.copyRightTxt}</Text>
          </SafeAreaView>
        </View>

      </ImageBackground>
      {loading && <View style={[commonStyles.loaderStyle]}>
        <Loader loading={loading ? loading : false} />
      </View>}

    </View>
  );
};

export default Login;
