import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../.././theme/responsiveSize";
import { COLORS } from "../../theme/colors";
import commonStyles from "../../theme/commonStyles";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.CHARCOAL_OPACITY_20,
        paddingHorizontal: moderateScale(30)
    },
    contentContainer: {
        padding: moderateScale(35),
        borderRadius: moderateScale(24),
        backgroundColor: COLORS.PRIMARY_WHITE,
    },
    iconStyle: {
        ...commonStyles.icon80,
        alignSelf: 'center',
        marginBottom: verticalScale(40)
    },
    title: {
        ...commonStyles.semiBold16,
        textAlign: 'center',
        marginBottom: verticalScale(15)
    },
    btnContainer: {
        width: '70%',
        alignSelf: 'center',
    },
    cancelTxtStyle: {
        ...commonStyles.medium16,
        marginTop: verticalScale(10),
        color: COLORS.PRIMARY_ORANGE,
        paddingHorizontal: verticalScale(20),
        paddingVertical: verticalScale(6),
        alignSelf: 'center',
    },
});

export default styles;
