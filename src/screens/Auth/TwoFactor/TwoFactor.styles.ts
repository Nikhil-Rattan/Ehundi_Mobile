
import {  StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.PRIMARY_WHITE
    },
    headerContainer:{
        ...commonStyles.centerAlignedRow,
        paddingVertical:verticalScale(15)
    },
    sideContainer:{
        flex:1,
        marginTop:verticalScale(8),
        marginHorizontal:verticalScale(18)
    },
    otpInputContainer: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(8),
        width:'75%',
        alignSelf:'center'
    },
    otpInputStyle: {
        borderRadius: moderateScale(10),
        borderWidth: verticalScale(1),
        borderBottomWidth: verticalScale(1)
    },
    btnContainer:{
        marginHorizontal: verticalScale(18), 
        marginBottom:verticalScale(20)
    },
    headingTxt:{
        ...commonStyles.semiBold16,
        textAlign:'center'
    },
    grayColor:{
        color:COLORS.DARK_GRAY,
        marginBottom:verticalScale(4)
    },
    resendBtnStyle:{
        paddingVertical: verticalScale(12),
        paddingHorizontal:verticalScale(8),
        width: '42%', alignSelf: 'center'
    },
    resendTxt:{
        ...commonStyles.medium12, 
        textAlign:'center'
    },
    whitColorTxt:{
        color:COLORS.PRIMARY_WHITE
    }

});
