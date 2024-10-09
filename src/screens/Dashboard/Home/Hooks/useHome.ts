import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import strings from '../../../../localization';
import {IMAGES} from '../../../../assets';
import {homeDataProps} from 'src/types/Home';
import {RouteProps} from 'src/types/DonationDetail';
import {useDispatch, useSelector} from 'react-redux';
import {allCategoriesAPI} from '../../../../redux/Slice/allCategories';

export const useHome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {categoriesData, error} = useSelector(state => state.categories);
  //   console.log(categoriesData,"000000firi");

  const [homeData, _setHomeData] = useState<homeDataProps[]>([
    {
      id: 4,
      name: strings.home.danpeti,
      image: IMAGES.danpeti,
    },
    {
      id: 0,
      name: strings.home.poojaDonation,
      image: IMAGES.poojaDonation,
    },
    {
      id: 1,
      name: strings.home.annaDan,
      image: IMAGES.aanDaan,
    },
    {
      id: 0,
      name: strings.home.upcomingPooja,
      image: IMAGES.upcomingPooja,
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
  ]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  useEffect(() => {
    // dispatch(allCategoriesAPI());
  }, [dispatch]);
  const onProfilePress = () => {
    navigation.navigate('Profile');
  };

  const onItemPress = async (item: RouteProps) => {
    console.log("hereeee", item);
    if (item?.id == 0) {
      await dispatch(allCategoriesAPI(item.name));
      // dispatch(allCategoriesAPI(item.name));
    }

    item?.id == 0
      ? navigation.navigate('Categories', {
          categoriesData: categoriesData,
          isCategories: true,
          categoryName: item?.name,
        })
      : navigation.navigate('DonationDetail', {data: item});
  };

  return {
    onProfilePress,
    loading,
    homeData,
    onItemPress,
  };
};
