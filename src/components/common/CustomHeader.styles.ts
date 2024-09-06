import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../theme/responsiveSize";
import { COLORS } from "../../theme/colors";
import commonStyles from "../../theme/commonStyles";

const styles = StyleSheet.create({
    headerContainer: {
        ...commonStyles.rowSpaceBetween,
        padding: verticalScale(15),
    },
    logoTxtStyle: {
        ...commonStyles.redressedRegular37,
        color: COLORS.PRIMARY_WHITE
    },
    userImgContainer: {
        ...commonStyles.icon45,
        borderRadius: moderateScale(25),
    },
});

export default styles;
