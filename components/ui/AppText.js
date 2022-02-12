import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const AppText = (props) => (
    <Text
        {...props}
        style={{
            ...props.style,
            fontFamily: props.bold ? 'Cairo-Bold' : 'Cairo-Light'
        }}
    >
        {props.children}
    </Text>);

AppText.propTypes = {
    bold: PropTypes.bool
};

export default AppText;