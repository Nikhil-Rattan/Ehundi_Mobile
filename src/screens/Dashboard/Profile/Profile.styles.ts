
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, scale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";
import { ImageEnum } from "../../../config/Enum";

export const styles = StyleSheet.create({
    listContainer: {

        marginTop: verticalScale(15),
        paddingTop:verticalScale(15),
        paddingBottom:verticalScale(30),
        marginHorizontal: verticalScale(20),
        backgroundColor:COLORS.PRIMARY_WHITE,
        alignItems: 'center',
        borderRadius:verticalScale(15)

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
        marginTop:verticalScale(5)
    },
    headingTxtStyle:{
        ...commonStyles.semiBold24,
        marginTop:verticalScale(5)
    },
    emailTxtStyle:{
        ...commonStyles.medium14,
        marginTop:verticalScale(5)
    },
    phoneTxtStyle:{
        ...commonStyles.medium14,
        marginTop:verticalScale(5)
    },
    btnStyle:{
        width:'40%',
    },
    fullWidth:{
        width:'100%'
    },
    btnContainer:{
        height:scale(75),
        width:scale(75),
        borderRadius:moderateScale(66),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.BTN_ORANGE,
        borderWidth:verticalScale(2),
        borderColor:COLORS.PRIMARY_WHITE,
    },
    iconStyle:{
        height:scale(66),
        width:scale(66),
        resizeMode:ImageEnum.contain
    },
    viewContainer:{
        flexDirection: 'row', 
        position: 'relative', 
        bottom: -85, 
        marginTop: verticalScale(-65)
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemContainer: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 8,
    },
    poojaNames: {
        fontSize: 14,
        color: '#eee',
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#eee',
    },
    name: {
        fontSize: 14,
        color: '#eee',
    },
    date: {
        fontSize: 14,
        color: '#eee',
    },
    nakshatra: {
        fontSize: 14,
        color: '#eee',
    },
    star: {
        fontSize: 14,
        color: '#eee',
    },
    status: {
        fontSize: 14,
        color:  'green'
    },
});
