import React from 'react'
import { SafeAreaView, Image, TouchableOpacity, View, FlatList, Text, ImageBackground, StatusBar, Platform } from 'react-native'
import { useHome } from './Hooks/useHome';
import commonStyles, { hitSlopProp } from '../../../theme/commonStyles';
import { Loader, CustomImage } from '../../../components';
import { styles } from './Home.styles';
import { IMAGES } from '../../../assets';
import { COLORS } from "../../../theme/colors";
import strings from '../../../localization';

const Home = () => {
  const {
    homeData,
    onProfilePress,
    loading
  } = useHome();

  const renderItem = ({ item }: { item: { name: string, image: any } }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.95}>
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
        <View style={styles.headerContainer}>
          <Image
            source={IMAGES.logo}
            style={{ ...commonStyles.icon56 }}
          />
          <Text style={styles.logoTxtStyle}>{strings.common.ehundi}</Text>
          <TouchableOpacity
            hitSlop={hitSlopProp}
            activeOpacity={0.7}
            onPress={onProfilePress}>
            <CustomImage
              source={IMAGES.dummyUserImg}
              style={styles.userImgContainer}
              loaderContainer={styles.userImgContainer}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.donationTxtStyle}>{strings.home.donations}</Text>
          <FlatList
            data={homeData}
            renderItem={renderItem}
            keyExtractor={(_item, index) => index.toString()}
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