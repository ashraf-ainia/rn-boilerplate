import { NativeModules } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enLocale from './en.json';
import arLocale from './ar.json';

export const configureLang = async () => {
    // fallback is english
    let appLang = 'en';

    const savedAppLang = await AsyncStorage.getItem('APP_LANG');
    if (savedAppLang && ['ar', 'en'].includes(savedAppLang)) {
        appLang = savedAppLang;
    } else {
        const deviceLanguage =
            Platform.OS === 'ios'
                ? NativeModules.SettingsManager.settings.AppleLocale ||
                NativeModules.SettingsManager.settings.AppleLanguages[0]
                : NativeModules.I18nManager.localeIdentifier;

        if (deviceLanguage && deviceLanguage.toLowerCase().match(/ar+/g)) {
            appLang = 'ar';
        } else {
            appLang = 'en';
        }
        AsyncStorage.setItem('APP_LANG', appLang);
    }

    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources: {
                en: {
                    translation: enLocale,
                },
                ar: {
                    translation: arLocale,
                },
            },
            lng: appLang,
            fallbackLng: 'en',
            keySeparator: false, // we do not use keys in form messages.welcome
            interpolation: {
                escapeValue: false, // react already safes from xss
            },
            compatibilityJSON: 'v3',
        });

    return appLang;
};