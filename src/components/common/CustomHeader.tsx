import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import CustomImage from './CustomImage'
import commonStyles, { hitSlopProp } from '../../theme/commonStyles'
import { IMAGES } from '../../assets'
import strings from '../../localization'
import styles from './CustomHeader.styles'
import { useSelector } from 'react-redux'
import { AllReducer } from 'src/types'

interface HeaderProps {
    onRightIconPress?: () => void;
    headerTxt?: string;
    rightIcon?: boolean;
    txtStyle?: object
}
const CustomHeader: FC<HeaderProps> = ({
    onRightIconPress,
    headerTxt = strings.common.ehundi,
    rightIcon = true,
    txtStyle

}) => {
    const { userData } = useSelector((state: AllReducer) => state.auth || {});
    return (
        <View style={styles.headerContainer}>
            <Image
                source={IMAGES.logo}
                style={{ ...commonStyles.icon56 }}
            />
            <Text style={{ ...styles.logoTxtStyle, ...txtStyle }}>{headerTxt}</Text>

            <TouchableOpacity
                hitSlop={hitSlopProp}
                activeOpacity={0.7}
                onPress={rightIcon ? onRightIconPress : () => { }}>
                {rightIcon ?
                    <CustomImage
                        source={rightIcon ? userData?.profileImg ? { uri: userData?.profileImg } : IMAGES.dummyUserImg : ''}
                        style={styles.userImgContainer}
                        loaderContainer={styles.userImgContainer}
                    />
                    : null}
            </TouchableOpacity>

        </View>
    )
}

export default CustomHeader