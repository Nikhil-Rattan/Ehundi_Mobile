import React from 'react'
import { SafeAreaView, Image, TouchableOpacity, View, FlatList, Text } from 'react-native'
import { useHome } from './Hooks/useHome';
import commonStyles, { hitSlopProp } from '../../../theme/commonStyles';
import { Loader, CustomImage } from '../../../components';
import { styles } from './Home.styles';
import { IMAGES } from '../../../assets';

const Home = () => {
  const {
    homeData,
    onProfilePress,
    loading
  } = useHome();

  const renderItem = ({ item }: { item: { name: string, image: any } }) => (
    <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.itemText}>{item.name}</Text>
    </View>
);

  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={IMAGES.logo}
          style={{ ...commonStyles.icon56 }}
        />
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
      <FlatList
            data={homeData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={styles.flatListContainer}
        />

      {loading && <View style={[commonStyles.loaderStyle]}>
        <Loader loading={loading ? loading : false} />
      </View>}
    </SafeAreaView>
  )
}

export default Home