
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";

export const styles = StyleSheet.create({
    listContainer: {

        marginTop: verticalScale(15),
        paddingTop:verticalScale(15),
        paddingBottom:verticalScale(30),
        marginHorizontal: verticalScale(20),
        backgroundColor:COLORS.PRIMARY_WHITE,
        alignItems: 'center',

    },
    headetTxtStyle: {
        marginRight: verticalScale(60)
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
    },
    userImgContainer: {
        ...commonStyles.icon78,
        borderRadius: moderateScale(55),
    },
    nameTxtStyle:{
        ...commonStyles.semiBold16,
        marginTop:verticalScale(20)
    },
    btnStyle:{
        width:'40%',
    },
    fullWidth:{
        width:'100%'
    }


});
