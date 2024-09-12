import { FC, useState } from 'react';
import { ActivityIndicator, ColorValue, Image, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './CustomImage.styles'
import { COLORS } from "../../theme/colors";
import { IMAGES } from '../../assets';

interface CustomImageProps {
    source: object | number;
    style?: object;
    imgLoaderStyle?: object;
    loaderContainer?: object;
    loaderColor?: ColorValue | undefined;
    loaderSize?: 'small' | 'large' | undefined;
    hasCameraIcon?: boolean
}

const CustomImage: FC<CustomImageProps> = props => {
    const {
        source,
        style,
        loaderContainer,
        loaderSize,
        loaderColor,
        hasCameraIcon = false
    } = props;
    const [loading, setLoading] = useState<boolean>(true);
    return (
        <View>
            <FastImage
                source={source}
                style={[styles.imgLoader, style]}
                onLoadStart={() => {
                    setLoading(true);
                }}
                onLoadEnd={() => {
                    setLoading(false);
                }}
            />
            {hasCameraIcon ?
                <Image
                    source={IMAGES.cameraIcon}
                    style={styles.cameraIconStyle} />
                : null}
            {loading && (
                <View style={[styles.loader, loaderContainer]}>
                    <ActivityIndicator size={loaderSize} color={loaderColor || COLORS.PRIMARY_ORANGE} />
                </View>
            )}
        </View >
    );
};

export default CustomImage;
