import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../components/ui/AppText';

const MainScreen = ({ t }) => {
    return (
        <View style={styles.root}>
            <AppText style={styles.text} bold>{t('welcome')}</AppText>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        padding: 16,
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default MainScreen;