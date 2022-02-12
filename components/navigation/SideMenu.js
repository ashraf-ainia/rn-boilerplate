import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  Text,
  ScrollView,
  Linking,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Navigation } from 'react-native-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Colors from '../../constants/Colors';
// import { loginRoot } from '../../navigation/loginRoot';
// import { useTranslation } from 'react-i18next';
// import TouchableNative from '../ui/TouchableNative';
import ChangeLang from '../ChangeLang';
// import { apiVersion } from '../../config/config';
// import { getBaseUrl, getApiEnv } from '../../config/heplers';

// import CText from '../ui/Text';

// const logoutHandler = () => {
//   AsyncStorage.removeItem('AUTH_TOKEN');
//   AsyncStorage.removeItem('SHOULD_PASS_LOGIN');
//   Navigation.setRoot(loginRoot);
// };

// const termsAndConditionsPressedHandler = async () => {
//   const baseUrl = await getBaseUrl();
//   Linking.openURL(`${baseUrl}/EngineerTermsAndConditions`);
// };

const SideMenu = () => {
  // const { t } = useTranslation();

  // const profilePressedHandler = () => {
  //   Navigation.push('MAIN_LAYOUT', {
  //     component: {
  //       name: 'ProfileScreen',
  //       options: {
  //         topBar: {
  //           title: {
  //             text: t('profile'),
  //           },
  //         },
  //       },
  //     },
  //   });
  //   Navigation.mergeOptions('MORE_LAYOUT', {
  //     bottomTabs: {
  //       currentTabIndex: 0,
  //     },
  //     sideMenu: {
  //       left: {
  //         visible: false,
  //       },
  //     },
  //   });
  // };

  return (
      <ScrollView>
        <ChangeLang />
        {/* <TouchableNative
          onPress={profilePressedHandler}
          style={{
            alignItems: 'center',
            paddingVertical: 16,
            paddingHorizontal: 16,
            marginBottom: 8,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: Colors.gray2,
          }}>
          <Icon
            name="person"
            size={18}
            color="#333"
            style={{transform: [{rotateY: '180deg'}]}}
          />
          <CText
            style={{
              color: Colors.gray6,
              paddingHorizontal: 8,
              fontWeight: 'bold',
            }}>
            {t('profile')}
          </CText>
        </TouchableNative> */}
      </ScrollView>
  );
};
      // {/* <TouchableNative
      //   onPress={termsAndConditionsPressedHandler}
      //   style={{alignItems: 'center', padding: 8, marginBottom: 8}}>
      //   <CText style={{color: Colors.gray6}}>{t('terms_and_conditions')}</CText>
      // </TouchableNative> */}
      // <View style={styles.block}>
      //   {/* <TouchableNative
      //     onPress={logoutHandler}
      //     style={{
      //       borderRadius: 5,
      //       padding: 16,
      //       marginHorizontal: 8,
      //       flexDirection: 'row',
      //       justifyContent: 'center',
      //       backgroundColor: Colors.danger,
      //       direction: 'rtl',
      //     }}>
      //     <CText style={{color: '#FFF', marginRight: 6}} bold>
      //       {t('logout')}
      //     </CText>
      //     <Icon
      //       name="log-out-outline"
      //       size={18}
      //       color="#FFF"
      //       style={{transform: [{rotateY: '180deg'}]}}
      //     />
      //   </TouchableNative> */}
      // </View>

const styles = StyleSheet.create({
  main: {
    flex: 1,
    direction: 'ltr',
    backgroundColor: '#FFF',
    padding: Platform.OS === 'ios' ? 32 : 16,
  },
  block: {
    padding: 8,
    marginBottom: 8,
  },
});

export default SideMenu;
