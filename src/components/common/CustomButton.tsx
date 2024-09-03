import React from 'react';
import { StyleProp, ViewStyle, TextStyle, TouchableOpacity, Text } from 'react-native';

import styles from './CustomButton.styles';
import commonStyles from '../../theme/commonStyles';


interface CustomButtonProps {
    title: string;
    onPress: () => void;
    customizeBtnStyle?: StyleProp<ViewStyle>;
    btnTitleStyle?: StyleProp<TextStyle>;
    isdisable?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    customizeBtnStyle,
    isdisable = false,

}) => {
    return (
        <TouchableOpacity
            style={[styles.btnStyle, customizeBtnStyle]}
            onPress={onPress}
            disabled={isdisable}
            activeOpacity={0.8}>
            <Text style={commonStyles.medium16}>{title}</Text>
        </TouchableOpacity>
    );
};


export default CustomButton;
