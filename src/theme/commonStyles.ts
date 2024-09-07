import { StyleSheet, ImageStyle, ViewStyle, TextStyle, Platform } from 'react-native';
import { moderateScale, scale } from './responsiveSize';
import { ImageEnum } from '../config/Enum';
import { COLORS } from './colors';
import { FONTS } from './fonts';

interface Style {
    container: ViewStyle;
    mainContainer: ViewStyle;
    fill: ImageStyle;
    centerAlignedView: ViewStyle;
    centerAlignedRow: ViewStyle;
    rowSpaceBetween: ViewStyle;
    rowSpaceEvenly: ViewStyle;
    loaderStyle: ViewStyle;
    redressedRegular37: TextStyle;
    semiBold24: TextStyle;
    semiBold16: TextStyle;
    semiBold10: TextStyle;
    medium16: TextStyle;
    medium14: TextStyle;
    medium12: TextStyle;
    medium10: TextStyle;
    regular16: TextStyle;
    regular12: TextStyle;
    light14: TextStyle;
    logoIconStyle: ImageStyle;
    passwordIconStyle: ImageStyle;
    icon20: ImageStyle;
    icon56: ImageStyle;
    icon45: ImageStyle;
    icon78: ImageStyle;
    icon25: ImageStyle;
    icon120: ImageStyle;
    icon160: ImageStyle;
    icon80:ImageStyle;
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
    semiBold24: {
        fontSize: moderateScale(24),
        color: COLORS.PRIMARY_WHITE,
        fontFamily: FONTS.semiBold,
    },
    semiBold10: {
        fontSize: moderateScale(10),
        color: COLORS.PRIMARY_ORANGE,
        fontFamily: FONTS.semiBold,
    },
    medium16: {
        fontSize: moderateScale(16),
        color: COLORS.PRIMARY_WHITE,
        fontFamily: FONTS.medium,
    },
    medium14: {
        fontSize: moderateScale(14),
        color: COLORS.PRIMARY_ORANGE,
        fontFamily: FONTS.medium,
    },
    medium12: {
        fontSize: moderateScale(12),
        color: COLORS.DARK_GRAY,
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
    loaderStyle: {
        backgroundColor: COLORS.PRIMARY_WHITE,
    },
    icon20: {
        width: scale(20),
        height: scale(20),
        resizeMode: ImageEnum.contain
    },
    icon56: {
        width: scale(56),
        height: scale(56),
        resizeMode: ImageEnum.contain
    },
    icon45: {
        height: scale(45),
        width: scale(45),
        resizeMode: ImageEnum.contain,
    },
    icon78: {
        height: scale(78),
        width: scale(78),
        resizeMode: ImageEnum.contain
    },
    icon25: {
        height: scale(25),
        width: scale(25),
        resizeMode: ImageEnum.contain
    },
    icon120: {
        width: scale(120),
        height: scale(120),
        resizeMode: ImageEnum.contain,
    },
    icon160: {
        width: scale(160),
        height: scale(160),
        resizeMode: ImageEnum.contain,
    },
    icon80:{
        width: scale(80),
        height: scale(80),
        resizeMode: ImageEnum.contain,
    }

});