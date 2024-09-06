import { Alert, PermissionsAndroid, Platform } from "react-native";
import {
    PERMISSIONS,
    requestMultiple,
    openSettings,
    checkMultiple,
} from "react-native-permissions";
import ActionSheet from 'react-native-action-sheet';
import ImageCropPicker, { Options } from 'react-native-image-crop-picker';
import strings from "../localization";

const BUTTONSiOS = [strings.common.camera, strings.common.gallery, strings.common.cancel]
const BUTTONSandroid = [strings.common.camera, strings.common.gallery]
const CANCEL_INDEX = 2;

const requestIOSCameraPermission = async () => new Promise(async () => {
    return await requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY])
})
const _requestAndroidCameraPermission = async () => new Promise(async () => {
    console.log('Requesting...   requestAndroidCameraPermission')
    return await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
    ])
})

const openSetting = () => {
    openSettings().catch(() => console.log("cannot open settings"));
};

const alertWithTwoBtn = (title, message, btn1Text, btn2Text) => {
    return new Promise(resolve => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: btn1Text,
                    onPress: () => resolve(true),
                },
                {
                    text: btn2Text,
                    onPress: () => resolve(false),
                },
            ],
            { cancelable: false },
        );
    });
};

const showPermissionErrorAlert = () => {
    alertWithTwoBtn(
        strings.permission_text.permission_error,
        strings.permission_text.diableCameraMsg,
        strings.permission_text.openSettings,
        strings.permission_text.cancel,
    ).then(res => {
        if (res) openSetting();
    });
};

const requestCameraPermission = async (): Promise<void> =>
    new Promise(async (resolve, reject) => {
        if (Platform.OS === 'ios') {
            await requestMultiple([
                PERMISSIONS.IOS.CAMERA,
                PERMISSIONS.IOS.PHOTO_LIBRARY,
            ])
                .then(async () => {
                    await checkMultiple([
                        PERMISSIONS.IOS.CAMERA,
                        PERMISSIONS.IOS.PHOTO_LIBRARY,
                    ]).then(async statuses => {
                        const cameraPermission = statuses[PERMISSIONS.IOS.CAMERA];
                        const photoLibPermission = statuses[PERMISSIONS.IOS.PHOTO_LIBRARY];
                        if (cameraPermission == 'denied') {
                            await requestIOSCameraPermission();
                        } else if (photoLibPermission == 'denied') {
                            await requestIOSCameraPermission();
                        } else if (cameraPermission == 'blocked') {
                            showPermissionErrorAlert()
                        } else if (photoLibPermission == 'blocked') {
                            showPermissionErrorAlert()
                        }
                        else {
                            return resolve();
                        }
                    });
                })
                .catch(error => {
                    console.log(error, 'PERMISSIONS.IOS ERror');
                    return reject();
                });
        } else {
            return PermissionsAndroid.requestMultiple([
                PERMISSIONS.ANDROID.CAMERA,
            ])
                .then(grantedResponse => {
                    const cameraPermission = grantedResponse['android.permission.CAMERA'];
                    if (cameraPermission == 'never_ask_again') {
                        showPermissionErrorAlert()
                    } else if (cameraPermission == 'denied') {
                        const camPermission = _requestAndroidCameraPermission();
                        console.log(camPermission, 'camPermission');
                    } else {
                        return resolve();
                    }
                    // return resolve();
                })
                .catch(error => {
                    console.log('Ask Camera permission error: ', error);
                    return reject(error);
                });
        }
    });

const selectSingleImage = (): Promise<any> =>
    new Promise(async (resolve, reject) => {
        ActionSheet.showActionSheetWithOptions(
            {
                options: Platform.OS === 'ios' ? BUTTONSiOS : BUTTONSandroid,
                cancelButtonIndex: CANCEL_INDEX,
                title: strings.common.chooseImageFrom
            },
            async buttonIndex => {
                try {
                    const imagePickerOptions: Options = {
                        compressImageQuality: 0.6,
                        mediaType: 'photo',
                        width: 300,
                        height: 400,
                        multiple: false,
                    };

                    switch (buttonIndex) {
                        case 0: {
                            const pickedImage = await ImageCropPicker.openCamera(imagePickerOptions);
                            resolve(pickedImage);
                            break;
                        }
                        case 1: {
                            const pickedImage = await ImageCropPicker.openPicker(imagePickerOptions);
                            resolve(pickedImage);
                            break;
                        }
                        case 2: {
                            reject('Select Cancel');
                            break;
                        }
                        default: {
                            reject('Select Cancel');
                            break;
                        }
                    }
                } catch (error) {
                    reject(error);
                    console.log('Image Picker Error: ', error);
                }
            }
        );
    });

export { selectSingleImage, requestCameraPermission };