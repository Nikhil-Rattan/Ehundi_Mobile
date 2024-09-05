
import {  StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { moderateScale, verticalScale } from "../../../theme/responsiveSize";
import commonStyles from "../../../theme/commonStyles";

export const styles = StyleSheet.create({
    headerContainer:{
        ...commonStyles.rowSpaceBetween,
        padding:verticalScale(15),
    
        backgroundColor:COLORS.LIGHT_ORANGE
    },
    userImgContainer:{
        ...commonStyles.icon45,
        borderRadius:moderateScale(25),
    },
    flatListContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center', // Center the image and text horizontally
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10, // Space between image and text
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center',
    },
   

});
