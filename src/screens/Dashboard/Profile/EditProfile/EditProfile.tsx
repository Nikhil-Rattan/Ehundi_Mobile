import React from 'react'
import { SafeAreaView, View, Text, ImageBackground, StatusBar, Platform, TouchableOpacity, TextInput } from 'react-native'
import commonStyles from '../../../../theme/commonStyles'
import { CustomButton, CustomHeader, CustomImage, CustomInput, Loader } from '../../../../components';
import { styles } from "./EditProfile.styles"
import { IMAGES } from '../../../../assets';
import { COLORS } from "../../../../theme/colors";
import strings from '../../../../localization';
import { useEditProfile } from './Hooks/useEditProfile';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditProfile = () => {

    const {
        formik,
        handleInputChange,
        loading,
        onImgPickerPress,
    } = useEditProfile();

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
                    rightIcon={false}
                    txtStyle={styles.headetTxtStyle} />
                <View style={styles.listContainer}>
                    <KeyboardAwareScrollView
                        bounces={false}
                        keyboardShouldPersistTaps='handled'
                        enableAutomaticScroll
                        showsVerticalScrollIndicator={false}
                        style={styles.scrollContainer}
                    >

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={onImgPickerPress}
                            style={styles.userImgContainer}>

                            <CustomImage
                                source={formik.values.profileImg ? { uri: formik.values.profileImg } : IMAGES.dummyUserImg}
                                style={styles.userImgContainer}
                                loaderContainer={styles.userImgContainer}
                                hasCameraIcon={true}
                            />


                        </TouchableOpacity>
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
                            autoCapitalize='none'
                            errorMessage={formik.errors.email ? formik.errors.email : ""}
                        />
                        <View style={[styles.inputContainer]}>
                            <Text style={styles.labelTxtStyle}>{strings.signUp.phoneNumber}</Text>
                            <View style={[styles.inputContainerView]}>
                                <View style={styles.countryCodeContainer}>
                                    <Text style={commonStyles.regular16}>
                                        {strings.placeHolder.countryCodePlaceHolder}
                                    </Text>
                                </View>
                                <View style={styles.inputFlex}>
                                    {!formik.values.phoneNumber && (
                                        <Text style={styles.customPlaceholder}>
                                            {strings.placeHolder.phoneNumberPlaceHolder}
                                        </Text>
                                    )}
                                    <TextInput
                                        style={{ ...styles.inputStyle }}
                                        value={formik.values.phoneNumber}
                                        onChangeText={(value: string) => handleInputChange('phoneNumber', value)}
                                        keyboardType={'phone-pad'}
                                        maxLength={10}
                                        cursorColor={COLORS.PRIMARY_ORANGE}
                                    />
                                </View>
                            </View>
                            {formik.errors.phoneNumber ?
                                <Text style={styles.errorStyle}>
                                    {formik.errors.phoneNumber}
                                </Text>
                                : null}

                        </View>
                        <CustomInput
                            label={strings.signUp.password}
                            value={formik.values.password}
                            placeholder={strings.placeHolder.passwordPlaceHolder}
                            secureTextEntry={true}
                            errorMessage={formik.errors.password ? formik.errors.password : ""}
                            onChangeText={(value: string) => handleInputChange('password', value)}
                        />
                        <CustomButton
                            title={strings.profile.updateProfile}
                            onPress={() => formik.handleSubmit()}
                            customizeBtnStyle={styles.btnStyle}

                        />
                    </KeyboardAwareScrollView>
                    {loading && <View style={[commonStyles.loaderStyle]}>
                        <Loader loading={loading ? loading : false} />
                    </View>}
                </View>
                <SafeAreaView>
                    <Text style={styles.copyRightTxtStyle}>{strings.common.copyRightTxt}</Text>
                </SafeAreaView>
            </SafeAreaView>

        </ImageBackground>
    )
}

export default EditProfile