
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";
import { FONTS } from "../../../theme/fonts";

export const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
        marginTop: verticalScale(15),
        paddingHorizontal:verticalScale(20),
        paddingBottom:verticalScale(60),
        alignItems:'center',

    },
    thankYoutxt: {
        fontSize: moderateScale(36),
        color: COLORS.PRIMARY_WHITE,
        fontFamily: FONTS.bold,
        marginTop:'15%'

    },
    forDonationTxt:{
        fontSize: moderateScale(24),
        color: COLORS.PRIMARY_WHITE,
        fontFamily: FONTS.regular,
        marginTop:verticalScale(15)
    },
    receiptTxt:{
        ...commonStyles.regular16,
        color:COLORS.PRIMARY_WHITE,
        marginVertical:verticalScale(25)
        
    },
    parsadTxt:{
        fontSize: moderateScale(18),
        color: COLORS.PRIMARY_WHITE,
        fontFamily: FONTS.medium,
        marginTop:verticalScale(15),
        textAlign:'center'
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
   

});
