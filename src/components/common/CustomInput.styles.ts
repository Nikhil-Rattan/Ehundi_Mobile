
import {  Platform, StyleSheet } from "react-native";
import commonStyles from "../../theme/commonStyles";
import { verticalScale, moderateScale, scale } from "../../theme/responsiveSize";
import { COLORS } from "../../theme/colors";
import { ImageEnum } from "../../config/Enum";

const styles = StyleSheet.create({
    container: {
        marginTop:verticalScale(22),
    },
    inputContainerView: {
        flexDirection:'row',
        justifyContent: 'center',
        borderWidth: verticalScale(1),
        borderColor: COLORS.LIGHT_ORANGE,
        paddingLeft: verticalScale(10),
        borderRadius: moderateScale(10),
        width:'100%',
    },
    labelTxtStyle: {
        ...commonStyles.regular16,
        textAlign:'center',
        marginBottom:verticalScale(10)
    },
    inputStyle: {
        flex:9.8,
        paddingVertical: scale(Platform.OS == 'ios' ? 18 : 16),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.regular16,
    },
    iconContainer: {
        flex: 1.5,
        alignSelf: 'center',
        alignItems: 'center',
    },
    errorStyle: {
        ...commonStyles.regular12,
        color: COLORS.ERROR_RED,
        marginTop: verticalScale(4),
        marginLeft: verticalScale(4),
    },
    customPlaceholder: {
        position: 'absolute',
        top: 0,
        right:0,
        bottom:0,
        left: verticalScale(10),
        paddingVertical: verticalScale(20),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.light14
      },
      openEyeIconStyle:{
        height:scale(18),
        width:scale(18),
        resizeMode:ImageEnum.contain
      }

});

export default styles;
