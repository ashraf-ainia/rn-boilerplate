import {Navigation} from 'react-native-navigation';
import {SET_SHOW_TOAST} from './notifications';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER_INFO = 'SET_USER_INFO';

export const authenticateUserByMobile = data => {
  return ({api}) => {
    return api.post('/EngineerRegistration/v1/AuthenticateUserByMobile', data);
  };
};

export const getCurrentLoginInformations = () => {
  return (dispatch, state, {api}) => {
    return api
      .get('/services/app/Session/GetCurrentEngineerLoginInfo')
      .then(res => {
        dispatch({type: SET_USER_INFO, payload: res.data.result});
        if (!res.data?.result?.iban) {
          Navigation.showModal({
            component: {
              name: 'EditIbanModal',
              options: {
                modal: {
                  swipeToDismiss: false,
                },
                hardwareBackButton: {
                  dismissModalOnPress: false,
                },
              },
              passProps: {
                pleaseUpdateIbanMessage: true,
              },
            },
          });
        }
      })
      .catch(error => {
        console.log('EngineerRegistration error: ', error);
      });
  };
};

export const updateIban = (t, iban, bankId, ibanImageId, componentId) => {
  return (dispatch, getState, {api}) => {
    const state = getState();
    const postData = {
      userId: state.auth?.userInfo?.user?.id,
      iban,
      bankId: bankId,
      ibanImageId,
    };

    return api
      .post('/EngineerRegistration/v1/UpdateIban', postData)
      .then(res => {
        dispatch(getCurrentLoginInformations());
        dispatch({
          type: SET_SHOW_TOAST,
          payload: {
            showToast: true,
            toastConfig: {
              text1: t('noti_iban_updated_successfully'),
            },
          },
        });
        Navigation.dismissModal(componentId);
        return new Promise(resolve => {
          resolve(res);
        });
      })
      .catch(err => {
        console.log('UpdateIban error: ', err);
        dispatch({
          type: SET_SHOW_TOAST,
          payload: {
            showToast: true,
            toastConfig: {
              type: 'error',
              text1:
                err.response?.data?.error?.validationErrors?.[0]?.message ||
                err.response?.data?.error?.message ||
                err.response?.statusText ||
                err.message ||
                ' ',
            },
          },
        });
        return new Promise((resolve, reject) => {
          reject(err);
        });
      });
  };
};
