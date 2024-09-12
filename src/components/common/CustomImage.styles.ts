import { ImageEnum } from "../../config/Enum";
import { StyleSheet } from "react-native";
import { moderateScale, scale } from "../../theme/responsiveSize";
import { COLORS } from "../../theme/colors";
import commonStyles from "../../theme/commonStyles";

const styles = StyleSheet.create({
    imgLoader: {
        height: scale(56),
        width: scale(56),
        borderRadius: moderateScale(25),
        resizeMode: ImageEnum.contain,
    },
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.CHARCOAL_OPACITY_20
    },
    cameraIconStyle:{
        ...commonStyles.icon25,
        position:'relative', 
        bottom:30, 
        right:-30, 
        alignSelf:'center'
    }
});

export default styles;
