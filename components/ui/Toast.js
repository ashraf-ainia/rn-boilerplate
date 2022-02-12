import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {useSelector, useDispatch} from 'react-redux';

import Colors from '../../constants/Colors';
import * as notificationsActions from '../../store/actions/notifications';

const myToastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: Colors.primary, direction: 'rtl'}}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{textAlign: 'center'}}
      text2Style={{textAlign: 'center'}}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: Colors.danger, direction: 'rtl'}}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{textAlign: 'center', color: Colors.danger}}
      text2Style={{textAlign: 'center', color: Colors.danger}}
    />
  ),
};

export default () => {
  const dispatch = useDispatch();
  const showToast = useSelector(state => state.notifications.toast.showToast);
  const toastConfig = useSelector(
    state => state.notifications.toast.toastConfig,
  );

  React.useEffect(() => {
    if (showToast) {
      Toast.show(toastConfig);
    }
  }, [showToast]);

  const onHideHandler = () => {
    dispatch({
      type: notificationsActions.SET_SHOW_TOAST,
      payload: {
        showToast: false,
        toastConfig: {
          type: 'success',
          position: 'bottom',
          text1: null,
          text2: null,
        },
      },
    });
  };

  return (
    <Toast
      config={myToastConfig}
      bottomOffset={16}
      position="bottom"
      type="success"
      onHide={onHideHandler}
    />
  );
};
