import React from 'react';
import { View, Text, ViewStyle, ImageStyle, ImageProps } from 'react-native';
import styles from './CustomModal.styles';
import { Modal } from 'react-native';
import { Image } from 'react-native';

import CustomButton from './CustomButton';
import { IMAGES } from '../../assets';
import strings from '../../localization';


interface CustomModalProps {
    isVisible: boolean;
    confirmTxt?: string;
    onConfirm: () => void;
    onCancel: () => void;
    modalStyle?: ViewStyle
    singleIconStyle?: ImageStyle
    icon?: ImageProps
    description?: string
    cancelTxt?: string
}

const CustomModal: React.FC<CustomModalProps> = ({
    isVisible,
    onConfirm,
    onCancel,
    confirmTxt = strings.profile.logout,
    cancelTxt = strings.common.cancel,
    modalStyle,
    singleIconStyle,
    icon = IMAGES.logOutIcon,
    description = strings.profile.logOutDescription
}) => {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={isVisible}
            presentationStyle="overFullScreen">
            <View style={styles.modalContainer}>
                <View style={[styles.contentContainer, modalStyle]}>
                    {icon ?
                        <Image source={icon} style={[styles.iconStyle, singleIconStyle]} />
                        : null}

                    <Text style={styles.title}>{description}</Text>
                    <View style={styles.btnContainer}>
                        <CustomButton title={confirmTxt} onPress={onConfirm} />
                        <Text
                            style={styles.cancelTxtStyle}
                            onPress={onCancel}>
                            {cancelTxt}
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default CustomModal;
