import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import useSignUpForm from "./useSignUpForm";
import { SignUpFormValues } from "../../../../types";
import { useState } from "react";
import { removeEmojis } from "../../../../utlis/validations";
import { showSuccess } from "../../../../utlis/helperFunctions";
import strings from "../../../../localization";
import { Keyboard } from "react-native";
import { requestCameraPermission, selectSingleImage } from "../../../../utlis/permission";


export const useSignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(false)
    const { formik, setFieldValue } = useSignUpForm({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            profileImg:''
        },
        onSubmit: (values) => {
            onSubmitButtonPress(values)
        },
    });
    const resetValues = () => {
        formik.resetForm({
            values: {
                fullName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                profileImg:''
            },
            errors: {},
        });
    }
    const onLoginPress = () => {
        resetValues()
        navigation.goBack()
    };
    const onSubmitButtonPress = async (values: SignUpFormValues) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            resetValues()
        }, 800);
        showSuccess(strings.signUp.otpSent)
        navigation.navigate('TwoFactoAuth', { data: values })

    }
    const handleInputChange = (field: keyof SignUpFormValues, value: string) => {
        const sanitizedValue = removeEmojis(value);
        setFieldValue(field, sanitizedValue);
    };
    const onImgPickerPress = async () =>{
        Keyboard.dismiss()
        await requestCameraPermission().then(() => {
            selectSingleImage().then(res => {
                if(res?.path){
                    setFieldValue('profileImg', res?.path);
                }
           
            });
        });
    }

    return {
        formik,
        setFieldValue,
        onLoginPress,
        handleInputChange,
        loading,
        onImgPickerPress,
    };
};
