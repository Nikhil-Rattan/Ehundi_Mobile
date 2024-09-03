import { StyleSheet, ImageStyle, ViewStyle, TextStyle, Platform } from 'react-native';
import { moderateScale, scale } from './responsiveSize';
import { ImageEnum } from '../config/Enum';
import { COLORS } from './colors';
import { FONTS } from './fonts';

interface Style {
    container: ViewStyle;
    fill: ImageStyle;
    centerAlignedView: ViewStyle;
    centerAlignedRow: ViewStyle;
    rowSpaceBetween: ViewStyle;
    rowSpaceEvenly: ViewStyle;
    redressedRegular37: TextStyle;
    semiBold16: TextStyle;
    semiBold10: TextStyle;
    medium16: TextStyle;
    medium10: TextStyle;
    regular16: TextStyle;
    regular12: TextStyle;
    light14: TextStyle;
    logoIconStyle: ImageStyle;
    passwordIconStyle: ImageStyle;
}

export const hitSlopProp = {
    top: 25,
    right: 25,
    left: 25,
    bottom: 25,
};

export default StyleSheet.create<Style>({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_WHITE
    },
    fill: {
        width: '100%',
        height: '100%',
        resizeMode: ImageEnum.cover,
    },
    centerAlignedView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerAlignedRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowSpaceEvenly: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    redressedRegular37: {
        fontSize: moderateScale(37),
        color: COLORS.LIGHT_ORANGE,
        fontFamily: FONTS.redressed_regular,
    },
    semiBold16: {
        fontSize: moderateScale(16),
        color: COLORS.BLACK,
        fontFamily: FONTS.semiBold,
    },
    semiBold10:{
        fontSize: moderateScale(10),
        color: COLORS.PRIMARY_ORANGE,
        fontFamily: FONTS.semiBold,
    },
    medium16: {
        fontSize: moderateScale(16),
        color: COLORS.PRIMARY_WHITE,
        fontFamily: FONTS.medium,
    },
    medium10: {
        fontSize: moderateScale(10),
        color: COLORS.BLACK,
        fontFamily: FONTS.medium,
    },
    regular16: {
        fontSize: moderateScale(16),
        color: COLORS.BLACK,
        fontFamily: FONTS.regular,
    },
    regular12: {
        fontSize: moderateScale(12),
        color: COLORS.BLACK,
        fontFamily: FONTS.regular,
    },
    light14: {
        fontSize: moderateScale(14),
        color: Platform.OS == 'ios' ? COLORS.BLACK : COLORS.ECLIPSE,
        fontFamily: Platform.OS == 'ios' ? FONTS.light : FONTS.extraLight,
    },
    logoIconStyle: {
        height: scale(129),
        width: scale(78),
        resizeMode: ImageEnum.contain
    },
    passwordIconStyle: {
        height: scale(13),
        width: scale(19),
        resizeMode: ImageEnum.contain

    },

});