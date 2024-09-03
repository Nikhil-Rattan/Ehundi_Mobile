import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { styles } from "./Loader.styles"
import { COLORS } from "../../theme/colors";


interface LoaderProps {
    loading: boolean
}

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
    return (
        <Modal transparent={true} animationType={"none"} visible={loading} statusBarTranslucent>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        size="large"
                        animating={loading}
                        color={COLORS.PRIMARY_ORANGE}
                        style={styles.activityIndicator}
                    />
                </View>
            </View>
        </Modal>
    );
};
