import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import strings from '../../../../localization';
import {Keyboard} from 'react-native';
import {createDonationAPI} from '../../../../redux/Slice/createDonation';
import {useDispatch, useSelector} from 'react-redux';

export const useDonationDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const [loading, _setLoading] = useState(false);
  const [amount, setAmount] = useState<any>(null);
  const [amountError, setAmountError] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDateForBackend, setSelectedDateForBackend] = useState('');
  const [userName, setUserName] = useState('');
  const [ids, setIds] = useState([]);
  const [userNameError, setUserNameError] = useState('');
  const[dateError,setDateError]=useState('');
  const[idsError,setIdsError]=useState('');

  const user = useSelector(state => state.signIn.signData);

  const dispatch = useDispatch();
  const {donationData, error} = useSelector(state => state.donation);
  console.log(donationData, '90909090900990');
  console.log(donationData?.donationId, 'Ppppppppppp');

  const onProfilePress = () => {
    navigation.navigate('Profile');
  };
    const onDonateBtnPress = (data: any) => {
console.log(data);

      if (amount && amount > 0) {
        const donationPayload = {
          user: user?.user?.userId,
          name: userName,
          gotra: selectedOption,
          poojaDate: selectedDateForBackend,
          files: [],
          donationAmount: amount,
          paymentStatus: 'unpaid',
          poojaId: ids,
          poojaName: data?.name,
        };

        Keyboard.dismiss();
        dispatch(createDonationAPI(donationPayload));

        if(donationData?.length > 0 && donationData?.donationId != '')
        navigation.navigate('Payment', {donationData: donationPayload, donationId: donationData?.donationId});
      } else {
        setAmountError(strings.error.enterAmount);
      }
    };








//   const onDonateBtnPress = (data: any, isDonating: boolean) => {
// console.log(isDonating);

//     {isDonating == true
// ? (    withoutCategories(data)
// ):(APIcall(data))}


//   };
//  const APIcall = (data: any) => {
// console.log(data,"Ioipipippip");

// if (ids.length == 0) {
//     setIdsError('upeitpi'); 
//     return;
//     }

// // Validate amount
// // if (!amount || amount <= 0) {
// // setAmountError(strings.error.enterAmount);
// // return;
// // }

// // Validate userName
// if (userName == '') {
// setUserNameError('Opippppp'); // Customize the error message
// return;
// }

// if (selectedDateForBackend === '') {
// setDateError('PPPpppp'); 
// return;
// }




// const donationPayload = {
// user: user?.user?.userId,
// name: userName,
// gotra: selectedOption,
// poojaDate: selectedDateForBackend,
// files: [],
// donationAmount: amount,
// paymentStatus: 'unpaid',
// poojaId: ids,
// poojaName: data?.name,
// };

// Keyboard.dismiss();
// dispatch(createDonationAPI(donationPayload));

// navigation.navigate('Payment', {
// donationData: donationPayload,
// donationId: donationData?.donationId,
// });
//  }


  const validateAmount = (value: string) => {
    if (!value) {
      setAmountError('Amount is required');
      return;
    }

    const numericValue = Number(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      setAmountError('Invalid amount');
      return;
    }

    setAmountError('');
  };

  return {
    onProfilePress,
    loading,
    amount,
    setAmount,
    amountError,
    onDonateBtnPress,
    setSelectedOption,
    selectedOption,
    validateAmount,
    selectedDate,
    setSelectedDate,
    selectedDateForBackend,
    setSelectedDateForBackend,
    userName,
    setUserName,
    ids,
    setIds,
    setUserNameError,
    userNameError,
    dateError,setDateError,
    idsError,setIdsError
  };
};
