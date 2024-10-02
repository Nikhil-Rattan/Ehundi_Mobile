import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import useSignUpForm from './useSignUpForm';
import {SignUpFormValues} from '../../../../types';
import {useState} from 'react';
import {removeEmojis} from '../../../../utlis/validations';
import {showSuccess, showError} from '../../../../utlis/helperFunctions';
import strings from '../../../../localization';
import {Keyboard} from 'react-native';
import {
  requestCameraPermission,
  selectSingleImage,
} from '../../../../utlis/permission';
import {useDispatch, useSelector} from 'react-redux';
import {logout, signUpUser} from '../../../../redux/Slice/signupSlice';
import React = require('react');
import { launchCamera } from 'react-native-image-picker';


export const useSignUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const authLoading = useSelector(state => state.signUp.loading);
  const authError = useSelector(state => state.signUp.error);
  const user = useSelector(state => state.signUp.signData);

  React.useEffect(() => {
    if (user && authError == null && authLoading == false) {
      setLoading(false);
      showSuccess(user?.success);
      dispatch(logout());

      navigation.navigate('Login');
    } else if (authError && authLoading == false) {
      setLoading(false);
      showError(authError?.error);
    }
  }, [user, authError, authLoading]);
  const {formik, setFieldValue} = useSignUpForm({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      profileImg: '',
    },
    onSubmit: async values => {
      await onSubmitButtonPress(values);
    },
  });

  const resetValues = () => {
    formik.resetForm();
  };

  const onLoginPress = () => {
    resetValues();
    navigation.goBack();
  };

  const onSubmitButtonPress = async (values: SignUpFormValues) => {
    setLoading(true);

    dispatch(signUpUser(values));
  };

  const handleInputChange = (field: keyof SignUpFormValues, value: string) => {
    const sanitizedValue = removeEmojis(value);
    setFieldValue(field, sanitizedValue);
  };

//   const onImgPickerPress = async () => {
//     Keyboard.dismiss();
//     const hasPermission = await requestCameraPermission();
//     if (hasPermission) {
//       const res = await selectSingleImage();
//       if (res?.path) {
//         setFieldValue('profileImg', res.path);
//       }
//     }
//   };

const onImgPickerPress = async () => {
  try {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    // Launch the camera directly
    const res = await launchCamera(options);

    if (res.didCancel) {
      console.warn('User cancelled camera picker');
    } else if (res.errorCode) {
      console.error('Camera error:', res.errorMessage);
    } else if (res.assets && res.assets.length > 0) {
      const imagePath = res.assets[0].uri; // Get the image URI
      setFieldValue('profileImg', imagePath); // Set the image path

      // Send the image link to the backend
      await sendImageLinkToBackend(imagePath);
    } else {
      console.warn('No image selected');
    }
  } catch (error) {
    console.error('Error opening camera:', error);
  }
};

// Function to send the image link to your backend
const sendImageLinkToBackend = async (imagePath) => {
  try {
    const response = await fetch('YOUR_BACKEND_URL/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imagePath }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
  } catch (error) {
    console.error('Error sending image to backend:', error);
  }
};

  return {
    formik,
    setFieldValue,
    onLoginPress,
    handleInputChange,
    loading,
    onImgPickerPress,
  };
};
