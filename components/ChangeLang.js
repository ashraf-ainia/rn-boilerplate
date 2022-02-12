import React from 'react';
import { View, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import Colors from '../constants/Colors';
import { Navigation } from 'react-native-navigation';
import RNRestart from 'react-native-restart';

import mainRoot from '../navigation/mainRoot';
import mainRootAr from '../navigation/mainRootAr';

import AppText from '../components/ui/AppText';

export default () => {
  const [isAr, setIsAr] = React.useState(false);
  const { i18n, t } = useTranslation();

  const toggleLangSwitch = () => {
    const newAppLang = isAr ? 'en' : 'ar';

    AsyncStorage.setItem('APP_LANG', newAppLang).then(async () => {
      i18n.changeLanguage(newAppLang);
      Navigation.setDefaultOptions({
        layout: {
          direction: newAppLang === 'ar' ? 'rtl' : 'ltr',
        },
      });
      Navigation.setRoot(isAr ? await mainRootAr() : await mainRoot());
      RNRestart.Restart();
    }).catch(err => console.log(err));
  };

  React.useEffect(() => {
    (async () => {
      const lang = await AsyncStorage.getItem('APP_LANG');
      if (lang === 'ar') {
        setIsAr(true);
      } else {
        setIsAr(false);
      }
    })();
  }, []);

  return (
    <View
      style={{
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Switch
        trackColor={{ false: Colors.gray3, true: Colors.gray3 }}
        thumbColor={isAr ? Colors.primary : Colors.secondary}
        ios_backgroundColor={Colors.primaryLight}
        onValueChange={toggleLangSwitch}
        value={isAr}
      />
      <AppText style={{ marginHorizontal: 8 }}>{isAr ? 'English' : 'عربي'}</AppText>
      <Icon name="earth-sharp" color="gray" size={25} />
    </View>
  );
};
