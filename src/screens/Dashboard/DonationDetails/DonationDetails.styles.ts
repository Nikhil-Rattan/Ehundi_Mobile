
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";
import { FONTS } from "../../../theme/fonts";

export const styles = StyleSheet.create({

    listContainer: {
        flexGrow: 1,
        marginTop: verticalScale(15),
        paddingHorizontal:verticalScale(20),
        paddingBottom:verticalScale(60)

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
    },
    imgStyle:{
        ...commonStyles.icon200,
        alignSelf:'center'
    },
    paragraphStlye:{
        marginTop:verticalScale(15),
        ...commonStyles.medium16,
        fontFamily:FONTS.mediumItalic,
        textAlign:'center'
    },
    btnBackgroundColor:{
        backgroundColor:COLORS.BTN_BLACK
    },
    txtColor:{
        color:COLORS.PRIMARY_WHITE
    },
    inputContainer:{
        marginTop:verticalScale(22),
    },
    dropdown: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.regular16,
        // borderLeftWidth:moderateScale(1.5),
        // borderLeftColor:COLORS.ECLIPSE,
        // height: 50,  
        // borderColor: '#ccc',
        backgroundColor:"white",
        // borderWidth: 1,
        color:"red",
        borderRadius: 8,
        borderLeftWidth:moderateScale(1.5),
        borderLeftColor:COLORS.ECLIPSE,
        // marginBottom: 20,
        // paddingHorizontal: 10,
      },
    inputContainerView: {
        flexDirection:'row',
        justifyContent: 'center',
        borderWidth: verticalScale(1),
        borderColor: COLORS.ECLIPSE,
        borderRadius: moderateScale(10),
        backgroundColor:COLORS.OFF_WHITE,
        width:'100%',
    },
    countryCodeContainer:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    inputFlex:{
        flex:8.5
    },
    customPlaceholder: {
        position: 'absolute',
        top: 0,
        right:0,
        bottom:0,
        left: verticalScale(10),
        paddingVertical: verticalScale(15),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.light14
      },
      inputStyle: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(10),
        ...commonStyles.regular16,
        borderLeftWidth:moderateScale(1.5),
        borderLeftColor:COLORS.ECLIPSE,
    },
    errorStyle: {
        ...commonStyles.medium12,
        color: COLORS.BLACK,
        marginTop: verticalScale(4),
        marginLeft: verticalScale(4),
    },
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
    itemTextcard:{
        ...commonStyles.medium14,
        color: COLORS.BLACK,
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
    selectedItemContainer: {
        borderColor: 'white', 
        borderWidth:4,
        // backgroundColor: '#007bff',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        // Change background color when selected
    },
    selectedText: {
        color: 'white', // Change text color when selected
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    logoTxtStyle: {
        ...commonStyles.redressedRegular37,
        color: COLORS.PRIMARY_WHITE
    },

});
