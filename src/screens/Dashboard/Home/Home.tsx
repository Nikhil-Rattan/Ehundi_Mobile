import React from 'react'
import { SafeAreaView, Image, TouchableOpacity, View, FlatList, Text, ImageBackground, StatusBar, Platform } from 'react-native'
import { useHome } from './Hooks/useHome';
import commonStyles from '../../../theme/commonStyles';
import { Loader, CustomHeader } from '../../../components';
import { styles } from './Home.styles';
import { IMAGES } from '../../../assets';
import { COLORS } from "../../../theme/colors";
import strings from '../../../localization';

const Home = () => {
  const {
    homeData,
    onProfilePress,
    loading,
    onItemPress
  } = useHome();

  const renderItem = ({ item }: { item: { name: string, image: any, id: number } }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.95}
      onPress={() => onItemPress(item)}>
      <Image source={item.image} style={commonStyles.icon120} />
      <View style={styles.itemBtnStyle}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={IMAGES.bgImg}
      style={commonStyles.container}
      imageStyle={commonStyles.fill}
    >
      <StatusBar
        hidden={Platform.OS !== 'ios'}
        barStyle={"dark-content"}
        backgroundColor={COLORS.PRIMARY_WHITE}
      />
      <SafeAreaView style={commonStyles.container}>
        <CustomHeader
          onRightIconPress={onProfilePress} />
        <View style={styles.listContainer}>
          <Text style={styles.donationTxtStyle}>{strings.home.donations}</Text>
          <FlatList
            data={homeData}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id?.toString()}
            numColumns={2}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <SafeAreaView>
          <Text style={styles.copyRightTxtStyle}>{strings.common.copyRightTxt}</Text>
        </SafeAreaView>
        {loading && <View style={[commonStyles.loaderStyle]}>
          <Loader loading={loading ? loading : false} />
        </View>}
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home