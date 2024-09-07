import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import strings from "../../../../localization"
import { IMAGES } from "../../../../assets";
import { homeDataProps } from "src/types/Home";
import {  RouteProps } from "src/types/DonationDetail";

export const useHome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(false)
    const [homeData, _setHomeData] = useState<homeDataProps[]>([
        {
            id: 1,
            name: strings.home.annaDan,
            image: IMAGES.aanDaan
        },
        {
            id: 2,
            name: strings.home.gauDan,
            image: IMAGES.gauDaan
        },
        {
            id: 3,
            name: strings.home.balajiSeva,
            image: IMAGES.vigrahaSeva
        },
        {
            id: 4,
            name: strings.home.jaganNathSeva,
            image: IMAGES.subhadraVigrahaSeva
        },
        {
            id: 5,
            name: strings.home.radheShyamSeve,
            image: IMAGES.vrindavanchandraVigrahaSeva
        },
        {
            id: 6,
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

    const onItemPress = (item: RouteProps) => {
        navigation.navigate('DonationDetail', { data: item });
    };



    return {
        onProfilePress,
        loading,
        homeData,
        onItemPress
    };
};
