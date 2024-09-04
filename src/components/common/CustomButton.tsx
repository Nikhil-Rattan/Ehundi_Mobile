import React from 'react';
import { StyleProp, ViewStyle, TextStyle, TouchableOpacity, Text } from 'react-native';

import styles from './CustomButton.styles';
import commonStyles from '../../theme/commonStyles';
import { COLORS } from '../../theme/colors';


interface CustomButtonProps {
    title: string;
    onPress: () => void;
    customizeBtnStyle?: StyleProp<ViewStyle>;
    btnTitleStyle?: StyleProp<TextStyle>;
    isdisable?: boolean;
    btnTxtStyle?: StyleProp<TextStyle>
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    customizeBtnStyle,
    btnTxtStyle,
    isdisable = false,

}) => {
    return (
        <TouchableOpacity
            style={[styles.btnStyle, customizeBtnStyle, { backgroundColor: isdisable ? COLORS.OFF_WHITE : COLORS.PRIMARY_ORANGE }]}
            onPress={onPress}
            disabled={isdisable}
            activeOpacity={0.8}>
            <Text style={[commonStyles.medium16, btnTxtStyle, { color: isdisable ? COLORS.DARK_GRAY : COLORS.OFF_WHITE }]}>{title}</Text>
        </TouchableOpacity>
    );
};


export default CustomButton;
