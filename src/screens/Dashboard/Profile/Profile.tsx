import React from 'react'
import { SafeAreaView, Image, View, Text, ImageBackground, StatusBar, Platform, TouchableOpacity } from 'react-native'
import commonStyles from '../../../theme/commonStyles';
import { CustomButton, CustomHeader, CustomImage, CustomModal } from '../../../components';
import { styles } from "./Profile.styles"
import { IMAGES } from '../../../assets';
import { COLORS } from "../../../theme/colors";
import strings from '../../../localization';
import { useProfile } from './Hooks/useProfile';
import { useSelector } from 'react-redux';
import { AllReducer } from '../../../types';

const Profile = () => {

  const {
    onEditProfilePress,
    onLogoutPress,
    handleCancel,
    handleConfirm,
    isModalVisible,
    isEditView,
    onDonateBtnPress,
    onDonationsBtnPress,
    onViewAccountPress
  } = useProfile();
  const { userData } = useSelector((state: AllReducer) => state.auth || {});
  const user = useSelector((state) => state.signIn.signData);

  const IconRow = ({ iconSource, text, onBtnPress }) => (
    <View style={commonStyles.centerAlignedView}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.btnContainer}
        onPress={onBtnPress}>
        <Image source={iconSource} style={styles.iconStyle} />

      </TouchableOpacity>
      <Text style={commonStyles.medium16}>{text}</Text>
    </View>
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
          rightIcon={false}
          txtStyle={styles.headetTxtStyle} />
        <View style={styles.listContainer}>
          <CustomImage
            source={user?.user?.profileImg ? { uri: user?.user?.profileImg } : IMAGES.dummyUserImg}
            style={styles.userImgContainer}
            loaderContainer={styles.userImgContainer}
          />
          <Text style={styles.nameTxtStyle}>{user?.user?.fullName}</Text>
          <Text style={styles.phoneTxtStyle}>{user?.user?.phoneNumber}</Text>
          <Text style={styles.emailTxtStyle}>{user?.user?.email}</Text>
          {isEditView ?
            <View style={[commonStyles.rowSpaceEvenly, styles.fullWidth, styles.viewContainer]}>

              <IconRow
                iconSource={IMAGES.donateIcon}
                text={strings.profile.donate}
                onBtnPress={onDonateBtnPress} />

              <IconRow
                iconSource={IMAGES.donationsIcon}
                text={strings.profile.donation} 
                onBtnPress={onDonationsBtnPress}/>

              <IconRow
                iconSource={IMAGES.myAccountIcon}
                text={strings.profile.myAccount}
                onBtnPress={onViewAccountPress} />
            </View>
            :
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
          }
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