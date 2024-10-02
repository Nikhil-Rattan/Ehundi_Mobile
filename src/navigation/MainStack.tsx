import { Profile, Home, DonationDetails, ThankYou, EditProfile,Categories, Payment } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";

const MainStack = createNativeStackNavigator<HomeStackParamList>();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false, presentation: 'containedTransparentModal', animation: 'fade' }}>
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Categories" component={Categories} />
            <MainStack.Screen name="Profile" component={Profile} />
            <MainStack.Screen name="DonationDetail" component={DonationDetails} />
            <MainStack.Screen name="ThankYou" component={ThankYou} />
            <MainStack.Screen name = "EditProfile" component={EditProfile} />
            <MainStack.Screen name = "Payment" component={Payment} />
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
