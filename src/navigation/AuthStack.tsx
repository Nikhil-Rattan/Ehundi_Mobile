import { Login, SignUp, ForgotPassword, TwoFactor } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false, presentation: 'containedTransparentModal', animation: 'fade' }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthStack.Screen name="TwoFactoAuth" component={TwoFactor} />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
