import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Keyboard } from "react-native";
import OTPTextView from 'react-native-otp-textinput';
import { StackParamList } from "../../../../navigation/types";
import { showError, showSuccess } from "../../../../utlis/helperFunctions";
import strings from "../../../../localization";
import { SignUpFormValues } from '../../../../types'

export const useTwoFactor = (params: SignUpFormValues) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [isVerifyDisable, setIsVerifyDisable] = useState<boolean>(true);
    const [isResendButtonDisable, setIsResendButtonDisable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [otpInput, setOtpInput] = useState<string>('');
    const input = useRef<OTPTextView>(null);
    const [timer, setTimer] = useState<number>(60);
    const userDetail = params ?? {};

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
      
        const minutesStr = String(minutes).padStart(2, '0');
        const secondsStr = String(remainingSeconds).padStart(2, '0');
      
        return `${minutesStr}:${secondsStr}`;
    };

    useEffect(() => {
        setIsVerifyDisable(otpInput.length < 4);
    }, [otpInput]);

    useEffect(() => {
        let interval: ReturnType<typeof setTimeout> | null = null;

        if (isResendButtonDisable) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(interval as ReturnType<typeof setTimeout>);
                        setIsResendButtonDisable(false);
                        return timer;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        } else {
            setTimer(60);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isResendButtonDisable]);

    const verifyOTP = async () => {
        Keyboard.dismiss();
        if(otpInput == '1234'){

        }
        else{
            showError(strings.error.matchOtpError)
        }
        console.log(otpInput);
    };

    const resendOtpPress = async () => {
        Keyboard.dismiss();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setIsResendButtonDisable(true);
            showSuccess(strings.otp.otpSentSuccess);
        }, 800);
      
    };

    const onBackPress = () => {
        navigation.goBack();
    };

    return {
        input,
        isVerifyDisable,
        isResendButtonDisable,
        onBackPress,
        resendOtpPress,
        setOtpInput,
        otpInput,
        verifyOTP,
        userDetail,
        timer: formatTime(timer),
        loading
    };
};
