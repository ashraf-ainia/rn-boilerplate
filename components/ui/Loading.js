import React from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

export default () => {
  const isLoading = useSelector(state => state.ui.loading);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (isLoading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isLoading]);

  if (!visible) {
    return null;
  }

  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        backgroundColor: '#88888888',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LottieView
        source={require('../../asstes/lottie/loading.json')}
        autoPlay
        loop
        style={{ width: Dimensions.get('screen').width }}
      />
    </View>
  );
};
