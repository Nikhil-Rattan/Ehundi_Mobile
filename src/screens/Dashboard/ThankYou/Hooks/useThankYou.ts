import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const useThankYou = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    }, [])

    const onProfilePress = () => {
        navigation.navigate('Profile')
    };

    return {
onProfilePress
    };
};
