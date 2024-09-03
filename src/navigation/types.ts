
export const NAVIGATION = {} as const;

// Auth Stack Parameters
export type AuthStackParamList = {
    Login: undefined | object;
    Home: undefined | object;
    SignUp: undefined | object;
    ForgotPassword: undefined | object;
    TwoFactoAuth: undefined | object;
};

// Home Stack Parameters
export type HomeStackParamList = {
    Home: undefined | object;
    Profile: undefined | object;
};

// Consolidated Stack Param List
export type StackParamList = {
    [K in keyof typeof NAVIGATION]: undefined | object;
} & AuthStackParamList & HomeStackParamList
