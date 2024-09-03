
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";

export const styles = StyleSheet.create({
    upperContainer: {
        flex: 1.2,
    },
    lowerContainer: {
        flex: 9.8,
        backgroundColor: COLORS.PRIMARY_WHITE,
        borderTopLeftRadius: verticalScale(34),
        borderTopRightRadius: verticalScale(34),
        paddingBottom: Platform.OS == 'ios' ? verticalScale(15) : 0
    },
    scrollContainer: {
        ...commonStyles.container,
        marginTop: verticalScale(10),
        marginHorizontal: verticalScale(18)
    },
    headerContainer:{
        ...commonStyles.rowSpaceBetween,
        marginTop:verticalScale(10),

    },
    logoTxtStyle: {
        ...commonStyles.medium14,
    },
    signUpContainer: {
        flexDirection: 'row',
        paddingVertical: verticalScale(10),
        marginTop: verticalScale(2),
        marginBottom: verticalScale(30),
        justifyContent: 'center',
    },
    signUpTxt: {
        ...commonStyles.medium10
    },
    activeTxt: {
        color: COLORS.PRIMARY_ORANGE
    },
    copyRightTxtStyle: {
        ...commonStyles.semiBold10,
        letterSpacing: verticalScale(2),
        paddingVertical:verticalScale(4),
        position: 'absolute',
        bottom:0,
        backgroundColor:COLORS.PRIMARY_WHITE,
        width:'100%',
        textAlign:'center',
    },
    inputContainer:{
        marginTop:verticalScale(22),
    },
    labelTxtStyle: {
        ...commonStyles.regular16,
        textAlign:'center',
        marginBottom:verticalScale(10)
    },
    inputContainerView: {
        flexDirection:'row',
        justifyContent: 'center',
        borderWidth: verticalScale(1),
        borderColor: COLORS.LIGHT_ORANGE,
        borderRadius: moderateScale(10),
        width:'100%',
    },
    customPlaceholder: {
        position: 'absolute',
        top: 0,
        right:0,
        bottom:0,
        left: verticalScale(10),
        paddingVertical: verticalScale(20),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.light14
      },
      inputStyle: {
        marginVertical: verticalScale(18),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.regular16,
        borderLeftWidth:moderateScale(1.5),
        borderLeftColor:COLORS.OFF_WHITE
    },
    errorStyle: {
        ...commonStyles.regular12,
        color: COLORS.ERROR_RED,
        marginTop: verticalScale(4),
        marginLeft: verticalScale(4),
    },
    countryCodeContainer:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    inputFlex:{
        flex:8.5
    }
});
