import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { verticalScale, moderateScale } from "../../theme/responsiveSize";

export const styles = StyleSheet.create({
    activityIndicator: {
        transform: [
            { translateX: Platform.OS === "ios" ? 2 : 0 },
            { translateY: Platform.OS === "ios" ? 2 : 0 },
        ],
        color: COLORS.PRIMARY_ORANGE
    },
    activityIndicatorWrapper: {
        alignItems: "center",
        borderRadius: moderateScale(30),
        display: "flex",
        height: moderateScale(60),
        justifyContent: "space-around",
        width: moderateScale(60),
    },
    modalBackground: {
        alignItems: "center",
        backgroundColor: COLORS.CHARCOAL_OPACITY_20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    footerStyle: {
        backgroundColor: COLORS.PRIMARY_WHITE,
        paddingVertical: verticalScale(8)
    }
});
