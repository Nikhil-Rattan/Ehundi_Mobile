import * as React from 'react';
import { Image, View, TouchableOpacity, TextInput, TextInputProps, ViewStyle, Text } from 'react-native';
import styles from './CustomInput.styles';
import commonStyles, { hitSlopProp } from '../../theme/commonStyles';
import { IMAGES } from '../../assets';
import { COLORS } from '../../theme/colors';

/**
Type Safety: Interfaces help provide type safety in your code. TypeScript will check that objects you pass
to your components match the expected structure defined in the interface.
This can catch type-related errors at compile time, which can be very helpful in preventing runtime errors.
Interfaces in TypeScript are a powerful tool for ensuring the consistency
and correctness of data structures and can be particularly useful when working with 
React Native to maintain clean and well-typed code.
 */
interface MyComponentProps {
    placeholder: string;
    onChangeText?: (txt: string) => void;
    onSubmitEditing?: () => void;
    handleBlur?: () => void;
    txtInputStyle?: object;
    cursorColor?: string;
    keyboardType?: TextInputProps['keyboardType'];
    errorMessage?: string;
    value: string;
    editable?: boolean;
    multiline?: boolean;
    maxLength?: number;
    secureTextEntry?: boolean;
    returnKeyType?: TextInputProps['returnKeyType'];
    autoCapitalize?: TextInputProps['autoCapitalize'];
    containerStyle?: object;
    onInputPress?: () => void;
    label: string
    mainContainer?: ViewStyle

}

const CustomInput: React.FC<MyComponentProps> = props => {
    const {
        placeholder = '',
        onChangeText,
        label,
        errorMessage = '',
        value = '',
        editable = true,
        secureTextEntry,
        txtInputStyle,
        cursorColor = COLORS.PRIMARY_ORANGE,
        keyboardType,
        multiline = false,
        maxLength,
        returnKeyType = 'done',
        autoCapitalize,
        onSubmitEditing,
        onInputPress,
        containerStyle,
        mainContainer
    } = props;
    const [secured, setSecured] = React.useState(true);
    return (
        <View style={[styles.container, mainContainer]}>

            {label ?
                <Text style={styles.labelTxtStyle}>{label}</Text>
                : null}
            <View style={[styles.inputContainerView, containerStyle]}>
                {!value && (
                    <Text style={styles.customPlaceholder}>
                        {placeholder}
                    </Text>
                )}
                <TextInput
                    style={{ ...styles.inputStyle, ...txtInputStyle }}
                    value={value}
                    secureTextEntry={secureTextEntry === true && secured}
                    onChangeText={onChangeText}
                    selectionColor={cursorColor}
                    keyboardType={keyboardType}
                    multiline={multiline}
                    editable={editable}
                    maxLength={maxLength}
                    returnKeyType={returnKeyType}
                    autoCorrect={false}
                    autoCapitalize={autoCapitalize}
                    onSubmitEditing={onSubmitEditing}
                    textContentType="oneTimeCode"
                    onPressIn={onInputPress}
                />
                {secureTextEntry === true && (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        activeOpacity={1}
                        onPress={() => setSecured(!secured)}
                        hitSlop={hitSlopProp}>
                        <Image
                            style={!secured ? styles.openEyeIconStyle : commonStyles.passwordIconStyle}
                            source={!secured ? IMAGES.openEyeIcon : IMAGES.closeEyeIcon}
                        />
                    </TouchableOpacity>
                )
                }
            </View>
            {errorMessage ?
                <Text style={styles.errorStyle}>
                    {errorMessage}
                </Text>
                : null}

        </View>
    );
};

export default CustomInput;

/**
 * By using React.FC, you get the benefit of TypeScript's type inference for props,
 *  which can help catch type-related errors early in development.
 *  It also makes it clear that MyComponent is a functional component, making your code more self-documenting.
 */
