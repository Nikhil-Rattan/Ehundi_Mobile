import React from 'react'
import { SafeAreaView, Image, View, Text, ImageBackground, StatusBar, Platform } from 'react-native'
import commonStyles from '../../../theme/commonStyles';
import { CustomButton, CustomHeader, CustomImage, CustomModal } from '../../../components';
import { styles } from "./Profile.styles"
import { IMAGES } from '../../../assets';
import { COLORS } from "../../../theme/colors";
import strings from '../../../localization';
import { useProfile } from './Hooks/useProfile';
import { useSelector } from 'react-redux';
import { AllReducer } from 'src/types';

const Profile = () => {

  const {
    onEditProfilePress,
    onLogoutPress,
    handleCancel,
    handleConfirm,
    isModalVisible
  } = useProfile();
  const { userData } = useSelector((state: AllReducer) => state.auth || {});

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
          rightIcon={false}
          txtStyle={styles.headetTxtStyle} />
        <View style={styles.listContainer}>
          <CustomImage
            source={userData?.profileImg ? { uri: userData?.profileImg } : IMAGES.dummyUserImg}
            style={styles.userImgContainer}
            loaderContainer={styles.userImgContainer}
          />
          <Text style={styles.nameTxtStyle}>{userData?.fullName}</Text>
          <View style={[commonStyles.rowSpaceEvenly, styles.fullWidth]}>
            <CustomButton
              title={strings.profile.edit}
              customizeBtnStyle={styles.btnStyle}
              onPress={onEditProfilePress}
            />
            <CustomButton
              title={strings.profile.logout}
              customizeBtnStyle={styles.btnStyle}
              onPress={onLogoutPress}
            />
          </View>
        </View>
        {isModalVisible ?
          <CustomModal
            isVisible={isModalVisible}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
          : null}
        {/* <SafeAreaView>
          <Text style={styles.copyRightTxtStyle}>{strings.common.copyRightTxt}</Text>
        </SafeAreaView> */}
      </SafeAreaView>

    </ImageBackground>
  )
}

export default Profile