
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { verticalScale } from "../../../theme/responsiveSize";
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
});
