import React, { useEffect } from 'react';
import RouteScreen from './src/navigation/RouteScreen';
import store from './src/redux/store'
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { BackHandler, StatusBar, StyleSheet } from 'react-native';
import { moderateScaleVertical, textScale } from './src/theme/responsiveSize';
import { positionEnum } from './src/config/Enum';
import checkLocalStorage from './src/helper/handleLocalStorage';

const App = () => {

  useEffect(() => {
    checkLocalStorage();
    setTimeout(() => {
      SplashScreen.hide();
    }, 800);
  }, []);


  const handleBackPress = () => {
    return false;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => backHandler.remove();
  }, []);

  return (
    <Provider store={store} >
      <RouteScreen />
      <FlashMessage
        titleStyle={styles.msgStyle}
        position={positionEnum?.top}
        hideStatusBar={false}
        statusBarHeight={StatusBar.currentHeight} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  msgStyle: {
    fontSize: textScale(14),
    paddingVertical: moderateScaleVertical(4)
  }
})
export default App;