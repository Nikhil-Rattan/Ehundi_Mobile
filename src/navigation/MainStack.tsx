import { Profile, Home } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";

const MainStack = createNativeStackNavigator<HomeStackParamList>();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Profile" component={Profile} />
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
