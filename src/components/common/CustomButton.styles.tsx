
import { StyleSheet } from "react-native";
import { verticalScale, moderateScale } from "../../theme/responsiveSize";
import { COLORS } from "../../theme/colors";

const styles = StyleSheet.create({
    btnStyle: {
        marginTop: verticalScale(30),
        paddingVertical: verticalScale(15),
        // maxHeight: verticalScale(56),
        backgroundColor: COLORS.PRIMARY_ORANGE,
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default styles;
