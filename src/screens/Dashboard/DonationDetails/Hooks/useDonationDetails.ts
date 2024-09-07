import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import strings from "../../../../localization"

export const useDonationDetails = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loading, _setLoading] = useState(false)
    const [amount, setAmount] = useState<any>(null)
    const [amountError, setAmountError] = useState('')


    const onProfilePress = () => {
        navigation.navigate('Profile')
    };
    const onDonateBtnPress = () => {
        if (amount && amount > 0) {
            // navigation.navigate()
        }
        else {
            setAmountError(strings.error.enterAmount)
        }
    }
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
        validateAmount
    };
};
