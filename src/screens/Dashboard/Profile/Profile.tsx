import React from 'react'
import { SafeAreaView, Image, View, Text, ImageBackground, StatusBar, Platform, TouchableOpacity, FlatList } from 'react-native'
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

  // Sample donation data
const donations = [
  {
      id: '1',
      poojaNames: ['Ganesh Pooja', 'Navaratri Pooja'],
      donationAmount: '₹ 50',
      poojaInNameOf: 'John Doe',
      poojaDate: '2023-09-01',
      nakshatra: 'Rohini',
      star: 'Taurus',
      status: 'Completed'
  },
  {
      id: '2',
      poojaNames: ['Lakshmi Pooja'],
      donationAmount: '₹ 20',
      poojaInNameOf: 'Jane Smith',
      poojaDate: '2023-09-05',
      nakshatra: 'Mrigashira',
      star: 'Gemini',
      status: 'Pending'
  },
  {
      id: '3',
      poojaNames: ['Shiv Pooja'],
      donationAmount: '$100',
      poojaInNameOf: 'Alice Johnson',
      poojaDate: '2023-09-10',
      nakshatra: 'Pushya',
      star: 'Cancer',
      status: 'Completed'
  },
  {
      id: '4',
      poojaNames: ['Durga Pooja', 'Satyanarayana Pooja'],
      donationAmount: '$75',
      poojaInNameOf: 'Bob Brown',
      poojaDate: '2023-09-15',
      nakshatra: 'Ashlesha',
      star: 'Leo',
      status: 'Failed'
  },
];

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

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer]}>
        <Text style={styles.title}>Pooja Names: <Text style={styles.poojaNames}>{item.poojaNames.join(', ')}</Text></Text>
        
        <Text style={styles.title}>Donation Amount: <Text style={styles.amount}>{item.donationAmount}</Text></Text>
        
        <Text style={styles.title}>Pooja in the Name of: <Text style={styles.name}>{item.poojaInNameOf}</Text></Text>
        
        <Text style={styles.title}>Pooja Date: <Text style={styles.date}>{item.poojaDate}</Text></Text>
        
        <Text style={styles.title}>Nakshatra: <Text style={styles.nakshatra}>{item.nakshatra}</Text></Text>
        
        <Text style={styles.title}>Star: <Text style={styles.star}>{item.star}</Text></Text>
        
        <Text style={styles.title}>Status: <Text style={styles.status}>{item.status}</Text></Text>
        
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
        <>
        {isEditView ?
        (
        <><View style={[commonStyles.rowSpaceEvenly, styles.fullWidth, {marginTop:75}]}>
          <Text style={styles.headingTxtStyle}>Your Donation Hisory</Text>
        </View>
        <View >
        <FlatList
            data={donations}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </View></>)
            
          : null}
          </>
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