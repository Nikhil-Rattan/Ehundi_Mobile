import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 800);
  }, []);

  return (
    <View>
      {/* Your app content */}
    </View>
  );
};

export default App;