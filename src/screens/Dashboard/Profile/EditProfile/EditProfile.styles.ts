
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../../theme/colors";
import { moderateScale, scale, verticalScale } from "../../../../theme/responsiveSize";
import commonStyles from "../../../../theme/commonStyles";

export const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
        marginTop: verticalScale(15),
        marginBottom: '10%',
        marginHorizontal: verticalScale(10),
        backgroundColor: COLORS.PRIMARY_WHITE,
        borderRadius: verticalScale(15),

    },
    headetTxtStyle: {
        marginRight: verticalScale(60)
    },
    copyRightTxtStyle: {
        ...commonStyles.semiBold10,
        letterSpacing: verticalScale(2),
        paddingTop: verticalScale(4),
        paddingBottom: verticalScale(Platform.OS == 'ios' ? 0 : 4),
        position: 'absolute',
        bottom: 0,
        color: COLORS.PRIMARY_WHITE,
        backgroundColor: COLORS.SECONDARY_ORANGE,
        width: '100%',
        textAlign: 'center',
    },
    userImgContainer: {
        ...commonStyles.icon78,
        borderRadius: moderateScale(25),
        alignSelf: 'center'
    },
    nameTxtStyle: {
        ...commonStyles.semiBold16,
        marginTop: verticalScale(20)
    },
    scrollContainer: {
        flex: 1,
        paddingTop: '10%',
        paddingHorizontal: verticalScale(20),
    },
    imgStyle: {
        ...commonStyles.icon78,
        alignSelf: 'center',
    },
    cameraIconStyle: {
        ...commonStyles.icon25,
        position: 'relative',
        bottom: 20,
        right: -32,
        alignSelf: 'center'
    },
    inputContainer: {
        marginTop: verticalScale(22),
    },
    labelTxtStyle: {
        ...commonStyles.regular16,
        textAlign: 'center',
        marginBottom: verticalScale(10)
    },
    inputContainerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: verticalScale(1),
        borderColor: COLORS.LIGHT_ORANGE,
        borderRadius: moderateScale(10),
        width: '100%',
    },
    customPlaceholder: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: verticalScale(10),
        paddingVertical: verticalScale(20),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.light14
    },
    inputStyle: {
        paddingVertical: verticalScale(18),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.regular16,
        borderLeftWidth: moderateScale(1.5),
        borderLeftColor: COLORS.OFF_WHITE,
    },
    countryCodeContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputFlex: {
        flex: 8.5
    },
    errorStyle: {
        ...commonStyles.regular12,
        color: COLORS.ERROR_RED,
        marginTop: verticalScale(4),
        marginLeft: verticalScale(4),
    },
    signUpContainer: {
        flexDirection: 'row',
        paddingVertical: verticalScale(10),
        marginTop: verticalScale(2),
        marginBottom: verticalScale(30),
        justifyContent: 'center',
    },
    btnStyle:{
        marginBottom:'20%'
    }




});
