import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../../../redux/Slice/authSlice";
import { clearAllItem } from "../../../../redux/Api/ClientApis/clientApi";
import { BackHandler } from "react-native";


export const useProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [isEditView, setIsEditView] = useState<boolean>(false)
    const dispatch = useDispatch();


    const handleBackPress = () => {
        if (isEditView) {
          setIsEditView(false); 
          return true;
        }
        return false;
      };
    
      useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => backHandler.remove();
      }, [isEditView]);

      useFocusEffect(
        useCallback(() => {
          setIsEditView(false)
        }, [])
      );
      
      


    const onEditProfilePress = () => {
        setIsEditView(true)
    }
    const onLogoutPress = () => {
        setIsModalVisible(true);
    };
    const onDonateBtnPress = () =>{
        navigation.navigate('Home')
    }
    const onDonationsBtnPress = () =>{
        // navigation.navigate('Home')
    }
    const onViewAccountPress = () => {
        navigation.navigate('EditProfile')

    }

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
        isModalVisible,
        isEditView,
        onDonateBtnPress,
        onDonationsBtnPress,
        onViewAccountPress
    };
};
