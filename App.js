import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { withTranslation } from 'react-i18next';

import { configureLang } from './locales';
import Colors from './constants/Colors';

import mainRoot from './navigation/mainRoot';
import mainRootAr from './navigation/mainRootAr';

import SideMenu from './components/navigation/SideMenu';
import MainScreen from './screens/MainScreen';

import { withReduxProvider } from './store';

const Screens = new Map();
Screens.set('SideMenu', SideMenu);
Screens.set('MainScreen', MainScreen);

// Register screens with redux subscribtion
Screens.forEach((Component, key) => {
  Navigation.registerComponent(
    key,
    () => gestureHandlerRootHOC(withReduxProvider(withTranslation()(Component))),
    () => Component,
  );
});

export const startApp = async () => {
  SplashScreen.hide();
  const appLang = await configureLang();

  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
      backgroundColor: Colors.appBG,
      direction: appLang === 'ar' ? 'rtl' : 'ltr',
    },
    statusBar: {
      backgroundColor: Colors.primary,
      style: 'light',
    },
    topBar: {
      visible: true,
      title: {
        color: Colors.secondaryDark,
        alignment: 'center',
      },
      backButton: {
        color: Colors.gray8,
      },
    },
  });
  const lastMainRoot = appLang === 'ar' ? await mainRootAr() : await mainRoot();
  Navigation.setRoot(lastMainRoot);
};

Navigation.events().registerBottomTabPressedListener(data => {
  // If more clicked, open side menue
  if (data.tabIndex === 1) {
    Navigation.mergeOptions('MORE_LAYOUT', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }
});
