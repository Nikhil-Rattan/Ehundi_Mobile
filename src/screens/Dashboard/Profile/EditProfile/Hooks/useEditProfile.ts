import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../../../../redux/Slice/authSlice";
import { clearAllItem } from "../../../../../redux/Api/ClientApis/clientApi";
import { BackHandler, Keyboard } from "react-native";
import useEditForm from '../Hooks/useEditForm'
import { AllReducer, EditProfileFormValues } from "src/types";
import { showSuccess } from "../../../../../utlis/helperFunctions";
import strings from "../../../../../localization";
import { removeEmojis } from "../../../../../utlis/validations";
import { requestCameraPermission, selectSingleImage } from "../../../../../utlis/permission";


export const useEditProfile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, setLoading] = useState(false)
    const { userData } = useSelector((state: AllReducer) => state.auth || {});
    const { formik, setFieldValue } = useEditForm({
        initialValues: {
            fullName: userData?.fullName ?? '',
            email: userData?.email ?? '',
            phoneNumber: userData?.phoneNumber ?? '',
            password: userData?.password ?? '',
            profileImg: userData?.profileImg ?? ''
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
                profileImg: ''
            },
            errors: {},
        });
    }
    const onLoginPress = () => {
        resetValues()
        navigation.goBack()
    };
    const onSubmitButtonPress = async (values: EditProfileFormValues) => {
        setLoading(true)
        dispatch(saveUserData({ ...values, access_token: '1234' }));
        setTimeout(() => {
            setLoading(false)
            showSuccess(strings.profile.profileSuccess)
            navigation.navigate('Profile')
        }, 800);

    }
    const handleInputChange = (field: keyof EditProfileFormValues, value: string) => {
        const sanitizedValue = removeEmojis(value);
        setFieldValue(field, sanitizedValue);
    };
    const onImgPickerPress = async () => {
        Keyboard.dismiss()
        await requestCameraPermission().then(() => {
            selectSingleImage().then(res => {
                if (res?.path) {
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
