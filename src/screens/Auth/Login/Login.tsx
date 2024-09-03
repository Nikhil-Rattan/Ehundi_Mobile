import { View, Text, StatusBar, ImageBackground, Image, Platform, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { COLORS } from '../../../theme/colors';
import commonStyles from '../../../theme/commonStyles';
import { IMAGES } from '../../../assets';
import { styles } from './Login.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomButton, CustomInput, Loader } from '../../../components';
import { useLogin } from './Hooks/useLogin';
import strings from '../../../localization';

const Login = () => {
  const {
    formik,
    handleInputChange,
    loading,
    onSignUpPress
  } = useLogin();

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
            <View style={commonStyles.centerAlignedView}>
              <Image source={IMAGES.logo} style={commonStyles.logoIconStyle} />
              <Text style={styles.logoTxtStyle}>
                {strings.common.ehundi}
              </Text>
            </View>
            <CustomInput
              label={strings.login.email}
              value={formik.values.email}
              placeholder={strings.placeHolder.emailPlaceHolder}
              onChangeText={(value: string) => handleInputChange('email', value)}
              keyboardType='email-address'
              errorMessage={formik.errors.email ? formik.errors.email : ""}
            />
            <CustomInput
              label={strings.login.password}
              value={formik.values.password}
              placeholder={strings.placeHolder.passwordPlaceHolder}
              secureTextEntry={true}
              errorMessage={formik.errors.password ? formik.errors.password : ""}
              onChangeText={(value: string) => handleInputChange('password', value)}
            />
            <CustomButton
              title={strings.login.login}
              onPress={() => formik.handleSubmit()}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signUpContainer}
              onPress={onSignUpPress}
            >
              <Text style={styles.signUpTxt}>{strings.login.dontHaveAccount}</Text>
              <Text style={[styles.signUpTxt, styles.activeTxt]}>{strings.login.signUp}</Text>
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
