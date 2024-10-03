import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  ImageBackground,
  StatusBar,
  Platform,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import {useDonationDetails} from './Hooks/useDonationDetails';
import commonStyles from '../../../theme/commonStyles';
import { Calendar } from 'react-native-calendars';

import {
  Loader,
  CustomHeader,
  CustomInput,
  CustomButton,
} from '../../../components';
import {styles} from './DonationDetails.styles';
import {IMAGES} from '../../../assets';
import {COLORS} from '../../../theme/colors';
import strings from '../../../localization';
import {DonationRouteProps} from 'src/types/DonationDetail';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-element-dropdown';

const DonationDetails = ({route}) => {
  const {data}: DonationRouteProps = route.params;
  const {
    onProfilePress,
    loading,
    onDonateBtnPress,
    amount,
    setAmount,
    amountError,
    validateAmount,
    selectedOption,
    setSelectedOption,
    selectedDate, setSelectedDate,
    selectedDateForBackend, setSelectedDateForBackend,
    userName, setUserName,
    ids, setIds,
    userNameError,
    dateError,
    idsError

  } = useDonationDetails();


  const [selectedItems, setSelectedItems] = useState([]);
const [isCalendarVisible, setCalendarVisible] = useState(false);
const formatDate = (date) => {
  const { day, month, year } = date;
  return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
};

const onDateSelect = (day) => {
  const formattedDate = formatDate(day);
setSelectedDateForBackend(day?.dateString)
    setSelectedDate(formattedDate);
    setCalendarVisible(false); 
}

const dropdownOptions = [
  { label: 'AGASTHYA', value: 'AGASTHYA' },
  { label: 'ATHREYA', value: 'ATHREYA' },
  { label: 'BHARADWAJA', value: 'BHARADWAJA' },
  { label: 'BHARGAVA', value: 'BHARGAVA' },
  { label: 'CHANDILYA', value: 'CHANDILYA' },
  { label: 'DHANANJAY', value: 'DHANANJAY' },
  { label: 'BHARADWAJA', value: 'BHARADWAJA' },

];
  const handleItemPress = item => {
    if (selectedItems.some(selectedItem => selectedItem._id === item._id)) {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem._id !== item._id),
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  console.log(selectedItems);
  

  useEffect(() => {
      const extractedIds = selectedItems.map(item => item._id);
      setIds(extractedIds);
  }, [selectedItems]);
  useEffect(() => {
    setAmount(calculateTotalPrice(selectedItems));
}, [selectedItems]);

const sumPrices = (items) => {
  return items.reduce((total, item) => {
    return total + (Number(item.price) || 0); 
    }, 0);
};

const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
        return total + parseFloat(item.price); 
    }, 0);
};

  const renderItem = ({
    item,
  }: {
    item: {name: string; image: any; id: number; description: any};
  }) => {
    const isSelected = selectedItems.some(
      selectedItem => selectedItem._id === item._id,
    );

    return (
      <TouchableOpacity
        style={[styles.itemContainer,
            isSelected ? styles.selectedItemContainer : null 

        ]}
        activeOpacity={0.95}
        onPress={() => handleItemPress(item)}>
        <Text style={[styles.itemTextcard,
isSelected ? styles.selectedText : null]

        }>{item.name}</Text>

        {/* <Image
          // source={{
          //   uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/512px-PNG_transparency_demonstration_1.png',
          // }}
          source={{uri:item?.image}}
          style={commonStyles.icon120}
        /> */}

        {/* <Image source={item.image} style={commonStyles.icon120} /> */}
        <Text style={[styles.itemTextcard,isSelected ? styles.selectedText : null]}>
          {' '}
          {strings.placeHolder.rupee} {item?.price}
        </Text>

        {/* <View style={styles.itemBtnStyle}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View> */}
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      source={IMAGES.bgImg}
      style={commonStyles.container}
      imageStyle={commonStyles.fill}>
      <StatusBar
        hidden={Platform.OS !== 'ios'}
        barStyle={'dark-content'}
        backgroundColor={COLORS.PRIMARY_WHITE}
      />
      <SafeAreaView style={commonStyles.container}>
        <CustomHeader onRightIconPress={onProfilePress} />
        <KeyboardAwareScrollView
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.donationTxtStyle}>
            {data?.name?.toUpperCase()}
          </Text>
          {
          data?.subcategories?.length > 0 ? (
            <Image
            source={{uri: data.image}}
           style={styles.imgStyle} />
          ) : (
            <Image
            source={data.image}  
           style={styles.imgStyle} />
          )
          }
          
      { data?.subcategories?.length === 0 || data?.subcategories== undefined  &&     <Text style={styles.paragraphStlye}>
            {strings.donationDetail.poojaDonation}
          </Text>
        }
          {data?.subcategories?.length > 0 && (
            <Text style={styles.paragraphStlye}>
              {data?.description}
            </Text>
          )}
          {data?.subcategories?.length > 0 && (
            <Text style={styles.donationTxtStyle}>
              Please select pooja from the list below
            </Text>
          )}
          {data?.subcategories?.length > 0 && (
            <>
            <FlatList
              data={data?.subcategories}
              keyExtractor={item => item._id}
              renderItem={renderItem}
              numColumns={2}
              contentContainerStyle={styles.paragraphStlye}
              showsVerticalScrollIndicator={false}
            />
           

         
            </>
          )}
          {/* idsError */}
          {idsError && data?.subcategories?.length ? (
              <Text style={styles.errorStyle}>{userNameError}</Text>
            ) : null
            }

          {selectedItems.length > 0 && (
            <View style={{}}>
              {/* <Text style={styles.itemTextcard}>Selected Items:</Text> */}
            
              <View style={[styles.inputContainer]}>
              <Text style={{ ...styles.donationTxtStyle,marginTop:2,fontSize:20 }}>Please submit below details</Text>
              <TextInput
        // style={styles.input}
        placeholder="Pooja in the name of "
        placeholderTextColor={"black"}
        value={userName}
        onChangeText={setUserName}
        style={{...styles.inputStyle,backgroundColor:"white",borderRadius:6,marginVertical:5}}
     
      //   editable={!data?.subcategories}
        // keyboardType={'phone-pad'}
        // maxLength={10}
        cursorColor={COLORS.PRIMARY_ORANGE}
      />    
         {userNameError ? (
              <Text style={styles.errorStyle}>{userNameError}</Text>
            ) : null
            }
            
        
          <Dropdown
        style={styles.dropdown}
        // backgroundColor={'black'}
        placeholderStyle={{color:"black"}}
        selectedTextStyle={{color:'black',fontSize: 16}}
        inputSearchStyle={{color:'black',    fontSize: 16}}
       
      itemTextStyle={{color:"black"}}
        data={dropdownOptions}
        labelField="label"
        valueField="value"
      
        placeholder="Select Gotram"
        value={selectedOption}
        onChange={item => {
          setSelectedOption(item.value);
        }}
      />
          {dateError ? (
              <Text style={styles.errorStyle}>{dateError}</Text>
            ) : null
            }

<TouchableOpacity onPress={() => setCalendarVisible(true)}>
                <Text
        style={{...styles.inputStyle,backgroundColor:"white",borderRadius:6,marginVertical:5,}}
        >
                    {selectedDate ? selectedDate : 'Select date for pooja'}
                </Text>
            </TouchableOpacity>
            {dateError ? (
              <Text style={styles.errorStyle}>{dateError}</Text>
            ) : null
            }
{/* 
              {isCalendarVisible && (
                  <View style={{ position: 'absolute',
                    top: 100, // Adjust as needed
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 5,
                    elevation: 2, // For Android shadow
                    zIndex: 1,   }}>
                      <Calendar
                          onDayPress={onDateSelect}
                          markedDates={{
                              [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
                          }}
                      />
                  </View>
              )} */}

      
                <View style={[styles.inputContainerView]}>
                  <View style={styles.countryCodeContainer}>
                    <Text style={commonStyles.regular16}>
                      {strings.placeHolder.rupee}
                    </Text>
                  </View>
                  <View style={styles.inputFlex}>
                    {/* {selectedItems.map(item => (
                      <Text key={item._id} style={{...styles.inputStyle}}>
                        {item?.price}
                        
                      </Text>
                    ))} */}
                                <Text style={{...styles.inputStyle}}>
                                {sumPrices(selectedItems)}
                                </Text>
  {/* Total: {selectedItems.reduce((total, item) => total + (item.price || 0), 0)} */}

                  </View>
                </View>
              </View>
            </View>
          )}

       { data?.subcategories== undefined &&
          <View style={[styles.inputContainer]}>
            <View style={[styles.inputContainerView]}>
              <View style={styles.countryCodeContainer}>
                <Text style={commonStyles.regular16}>
                  {strings.placeHolder.rupee}
                </Text>
              </View>
              <View style={styles.inputFlex}>
                {!amount && (
                  <Text style={styles.customPlaceholder}>
                    {strings.placeHolder.INR}
                  </Text>
                )}
                <TextInput
                  style={{...styles.inputStyle}}
                  value={amount}
                  onChangeText={(value: string) => {
                    setAmount(value), validateAmount(value);
                  }}
                //   editable={!data?.subcategories}
                  keyboardType={'phone-pad'}
                  maxLength={10}
                  cursorColor={COLORS.PRIMARY_ORANGE}
                />
              </View>
            </View>
            {amountError ? (
              <Text style={styles.errorStyle}>{amountError}</Text>
            ) : null}
          </View>
          }

{ data?.subcategories?.length === 0 &&
          <View style={[styles.inputContainer]}>
            <View style={[styles.inputContainerView]}>
              <View style={styles.countryCodeContainer}>
                <Text style={commonStyles.regular16}>
                  {strings.placeHolder.rupee}
                </Text>
              </View>
              <View style={styles.inputFlex}>
                {!amount && (
                  <Text style={styles.customPlaceholder}>
                    {strings.placeHolder.INR}
                  </Text>
                )}
                <TextInput
                  style={{...styles.inputStyle}}
                  value={amount}
                  onChangeText={(value: string) => {
                    setAmount(value), validateAmount(value);
                  }}
                //   editable={!data?.subcategories}
                  keyboardType={'phone-pad'}
                  maxLength={10}
                  cursorColor={COLORS.PRIMARY_ORANGE}
                />
              </View>
            </View>
            {amountError ? (
              <Text style={styles.errorStyle}>{amountError}</Text>
            ) : null}
          </View>}
          <Text style={[styles.errorStyle, {marginTop:20, marginBottom:0, padding:0, color:'yellow'}]}>
       Kindly process donation payments using UPI Id Only.
       </Text>
          
          <CustomButton
            title={strings.donationDetail.donateNow?.toUpperCase()}
            onPress={()=>onDonateBtnPress(data)}
            customizeBtnStyle={styles.btnBackgroundColor}
            btnTxtStyle={styles.txtColor}
          />
        </KeyboardAwareScrollView>
        <SafeAreaView>
          <Text style={styles.copyRightTxtStyle}>
            {strings.common.copyRightTxt}
          </Text>
        </SafeAreaView>
        {loading && (
          <View style={[commonStyles.loaderStyle]}>
            <Loader loading={loading ? loading : false} />
          </View>
        )}
               <Modal
                visible={isCalendarVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Calendar
                            onDayPress={onDateSelect}
                            markedDates={{
                                [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
                            }}
                        />
                        {/* <Button title="Close" onPress={() => setCalendarVisible(false)} /> */}

                    </View>
                </View>
            </Modal>
        
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DonationDetails;
