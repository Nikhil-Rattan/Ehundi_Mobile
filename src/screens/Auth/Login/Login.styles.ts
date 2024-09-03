
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";

export const styles = StyleSheet.create({
    upperContainer: {
        flex: 4,
    },
    lowerContainer: {
        flex: 8,
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
    logoTxtStyle: {
        ...commonStyles.redressedRegular37,
        marginTop: verticalScale(4)
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
        position: 'absolute',
        bottom: 2,
        alignSelf: 'center'
    },
    loader: {
        backgroundColor: COLORS.PRIMARY_WHITE,
    }
});
