import React from 'react'
import { SafeAreaView, Image, View, Text, ImageBackground, StatusBar, Platform } from 'react-native'
import commonStyles from '../../../theme/commonStyles';
import { CustomHeader } from '../../../components';
import { styles } from "./ThankYou.styles"
import { IMAGES } from '../../../assets';
import { COLORS } from "../../../theme/colors";
import strings from '../../../localization';
import { useThankYou } from './Hooks/useThankYou';

const ThankYou = () => {
    const {
        onProfilePress,

    } = useThankYou();


    return (
        <ImageBackground
            source={IMAGES.bgImg}
            style={commonStyles.container}
            imageStyle={commonStyles.fill}
        >
            <StatusBar
                hidden={Platform.OS !== 'ios'}
                barStyle={"dark-content"}
                backgroundColor={COLORS.PRIMARY_WHITE}
            />
            <SafeAreaView style={commonStyles.container}>
                <CustomHeader
                    onRightIconPress={onProfilePress} />
                <View style={styles.listContainer}>
                    <Text style={styles.thankYoutxt}>{strings.thankYou.thankYou}</Text>

                    <Text style={styles.forDonationTxt}>{strings.thankYou.forDonation}</Text>
                    <Text style={styles.receiptTxt}>{strings.thankYou.shareReceipt}</Text>
                    <Image
                        source={IMAGES.prashadImg} />
                    <Text style={styles.parsadTxt}>{strings.thankYou.prasadam}</Text>
                </View>
                <SafeAreaView>
                    <Text style={styles.copyRightTxtStyle}>{strings.common.copyRightTxt}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ThankYou