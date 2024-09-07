import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../../../redux/Slice/authSlice";
import { clearAllItem } from "../../../../redux/Api/ClientApis/clientApi";


export const useProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const dispatch = useDispatch();
    const onEditProfilePress = () => {

    }
    const onLogoutPress = () => {
        setIsModalVisible(true);
    };

    const handleConfirm = () => {
        setIsModalVisible(false);
        dispatch(saveUserData({}))
        clearAllItem()
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return {
        onLogoutPress,
        onEditProfilePress,
        handleCancel,
        handleConfirm,
        isModalVisible
    };
};
