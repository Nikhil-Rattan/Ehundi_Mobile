import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import useSignUpForm from "./useSignUpForm";
import { SignUpFormValues } from "../../../../types";
import { useState } from "react";
import { removeEmojis } from "../../../../utlis/validations";


export const useSignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(false)
    const { formik, setFieldValue } = useSignUpForm({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
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
                password: '',
                confirmPassword: ''
            },
            errors: {},
        });
    }
    const onLoginPress = () => {
        resetValues()
        navigation.goBack()
    };
    const onSubmitButtonPress = async (_values: SignUpFormValues) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate('TwoFactoAuth')
        }, 800);

    }
    const handleInputChange = (field: keyof SignUpFormValues, value: string) => {
        const sanitizedValue = removeEmojis(value);
        setFieldValue(field, sanitizedValue);
    };

    return {
        formik,
        setFieldValue,
        onLoginPress,
        handleInputChange,
        loading
    };
};
