
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import {  verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";

export const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: verticalScale(10),
        paddingBottom: verticalScale(40),
    },
    itemContainer: {
        flex: 0.555,
        marginVertical: verticalScale(10),
        marginHorizontal: verticalScale(6),
        alignItems: 'center',
        backgroundColor: COLORS.PRIMARY_WHITE,
        borderRadius: verticalScale(15),
        paddingHorizontal: verticalScale(15),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(1)
    },
    itemText: {
        ...commonStyles.medium14,
        color: COLORS.PRIMARY_WHITE,
        textAlign: 'center'
    },
    itemBtnStyle: {
        backgroundColor: COLORS.MUSTARD,
        width: '110%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(4),
        paddingVertical: verticalScale(4),
        borderRadius: verticalScale(15),
        paddingHorizontal: verticalScale(4)

    },
    listContainer: {
        flex: 1,
        marginTop: verticalScale(15)

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
    }


});
