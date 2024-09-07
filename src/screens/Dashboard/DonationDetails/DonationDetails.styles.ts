
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";

export const styles = StyleSheet.create({

    listContainer: {
        flexGrow: 1,
        marginTop: verticalScale(15),
        paddingHorizontal:verticalScale(20),
        paddingBottom:verticalScale(60)

    },
    donationTxtStyle: {
        ...commonStyles.semiBold24,
        textAlign: 'center',
        marginBottom: verticalScale(10)

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
    imgStyle:{
        ...commonStyles.icon160,
        alignSelf:'center'
    },
    paragraphStlye:{
        marginTop:verticalScale(25),
        ...commonStyles.medium16,
        textAlign:'center'
    },
    btnBackgroundColor:{
        backgroundColor:COLORS.PRIMARY_WHITE
    },
    txtColor:{
        color:COLORS.PRIMARY_ORANGE
    },
    inputContainer:{
        marginTop:verticalScale(22),
    },
    inputContainerView: {
        flexDirection:'row',
        justifyContent: 'center',
        borderWidth: verticalScale(1),
        borderColor: COLORS.ECLIPSE,
        borderRadius: moderateScale(10),
        backgroundColor:COLORS.OFF_WHITE,
        width:'100%',
    },
    countryCodeContainer:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    inputFlex:{
        flex:8.5
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
        paddingVertical: verticalScale(18),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.regular16,
        borderLeftWidth:moderateScale(1.5),
        borderLeftColor:COLORS.ECLIPSE,
    },
    errorStyle: {
        ...commonStyles.regular12,
        color: COLORS.OFF_WHITE,
        marginTop: verticalScale(4),
        marginLeft: verticalScale(4),
    },


});
