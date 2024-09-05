import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import strings from "../../../../localization"
import { IMAGES } from "../../../../assets";
import { homeDataProps } from "src/types/Home";

export const useHome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(true)
    const [homeData, _setHomeData] = useState<homeDataProps[]>([
        {
            name: strings.home.annaDan,
            image: IMAGES.aanDaan
        },
        {
            name: strings.home.gauDan,
            image: IMAGES.gauDaan
        },
        {
            name: strings.home.balajiSeva,
            image: IMAGES.vigrahaSeva
        },
        {
            name: strings.home.jaganNathSeva,
            image: IMAGES.subhadraVigrahaSeva
        },
        {
            name: strings.home.radheShyamSeve,
            image: IMAGES.vrindavanchandraVigrahaSeva
        },
        {
            name: strings.home.sadhuBhojan,
            image: IMAGES.saadhuBhojan
        },

    ])
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 800);
    }, [])

    const onProfilePress = () => {
        navigation.navigate('Profile')
    };



    return {
        onProfilePress,
        loading,
        homeData
    };
};
