import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import useLoginForm from "./useLoginForm";
import { LoginFormValues } from "../../../../types";
import { useState } from "react";
import { removeEmojis } from "../../../../utlis/validations";
import { Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../../..//redux/Slice/authSlice";

export const useLogin = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const { formik, setFieldValue } = useLoginForm({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            onSubmitButtonPress(values)
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
    }
    const onSignUpPress = () => {
        resetValues()
        navigation.navigate('SignUp')
    };
    const onSubmitButtonPress = async (_values: LoginFormValues) => {
        const userDetails ={
            access_token: "1234", 
            email: "sam@gmail.com", 
            fullName: "Sam Doe", 
            password: "Test@123", 
            phoneNumber: "7087701418"}
        Keyboard.dismiss()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            resetValues()
            dispatch(saveUserData(userDetails))
        }, 800);
    }
    const handleInputChange = (field: keyof LoginFormValues, value: string) => {
        const sanitizedValue = removeEmojis(value);
        setFieldValue(field, sanitizedValue);
    };

    return {
        formik,
        setFieldValue,
        onSignUpPress,
        handleInputChange,
        loading
    };
};
