import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import useLoginForm from './useLoginForm';
import {LoginFormValues} from '../../../../types';
import {useState} from 'react';
import {removeEmojis} from '../../../../utlis/validations';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {saveUserData} from '../../../..//redux/Slice/authSlice';
import {logout, signInUser} from '../../../../redux/Slice/signInSlice';
import {showError, showSuccess} from '../../../../utlis/helperFunctions';
import React = require('react');
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const authLoading = useSelector(state => state.signIn.loading);
  const authError = useSelector(state => state.signIn.error);
  const user = useSelector(state => state.signIn.signData);

  React.useEffect(() => {
    const handleAuthentication = async () => {
      if (user && authError == null && !authLoading) {
        setLoading(false);
        showSuccess(user.message);

        // Store the access token in AsyncStorage
        try {
          await AsyncStorage.setItem('accessToken', user.token); // Adjust the key and value as needed
        } catch (error) {
          console.error('Failed to save access token:', error);
        }

        navigation.navigate('Home');
      } else if (authError && !authLoading) {
        setLoading(false);
        showError(authError);
      }
    };

    handleAuthentication();
  }, [user, authError, authLoading]);
  const {formik, setFieldValue} = useLoginForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      onSubmitButtonPress(values);
    },
  });
  const resetValues = () => {
    formik.resetForm({
      values: {
        email: '',
        password: '',
      },
      errors: {},
    });
  };
  const onSignUpPress = () => {
    resetValues();
    navigation.navigate('SignUp');
  };
  const onSubmitButtonPress = async (_values: LoginFormValues) => {
console.log(_values);
Keyboard.dismiss()
    setLoading(true)
    dispatch(signInUser(_values));
    
    // setTimeout(() => {
    //     setLoading(false)
    //     resetValues()
    //     dispatch(saveUserData(userDetails))
    // }, 800);
  };
  const handleInputChange = (field: keyof LoginFormValues, value: string) => {
    const sanitizedValue = removeEmojis(value);
    setFieldValue(field, sanitizedValue);
  };

  return {
    formik,
    setFieldValue,
    onSignUpPress,
    handleInputChange,
    loading,
  };
};
