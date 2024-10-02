import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import strings from "../../../../localization"
import { IMAGES } from "../../../../assets";
import { homeDataProps } from "src/types/Home";
import {  RouteProps } from "src/types/DonationDetail";
import { useDispatch, useSelector } from "react-redux";
import { allCategoriesAPI } from "../../../../redux/Slice/allCategories";

export const useHome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const { categoriesData, error } = useSelector((state) => state.categories);
//   console.log(categoriesData,"000000firi");
  
   

    const [homeData, _setHomeData] = useState<homeDataProps[]>([
        {
            id: 1,
            name: strings.home.annaDan,
            image: IMAGES.aanDaan
        },
        {
            id: 0,
            name: strings.home.gauDan,
            image: IMAGES.gauDaan
        },
        {
            id: 0,
            name: strings.home.balajiSeva,
            image: IMAGES.vigrahaSeva
        },
        {
            id: 4,
            name: strings.home.donations,
            image: IMAGES.subhadraVigrahaSeva
        },
        // {
        //     id: 5,
        //     name: strings.home.radheShyamSeve,
        //     image: IMAGES.vrindavanchandraVigrahaSeva
        // },
        // {
        //     id: 6,
        //     name: strings.home.sadhuBhojan,
        //     image: IMAGES.saadhuBhojan
        // },

    ])
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 800);
    }, [])
    useEffect(() => {
        dispatch(allCategoriesAPI());
      }, [dispatch]);
    const onProfilePress = () => {
        navigation.navigate('Profile')
    };

    const onItemPress = (item: RouteProps) => {
        console.log(item);
       item?.id == 0 ? navigation.navigate('Categories', { categoriesData: categoriesData,isCategories:true }): navigation.navigate('DonationDetail', { data: item }) 
    };

    return {
        onProfilePress,
        loading,
        homeData,
        onItemPress
    };
};
