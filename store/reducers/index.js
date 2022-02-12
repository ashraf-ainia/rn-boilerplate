import { combineReducers } from 'redux';

import AuthReducer from './auth';
import UiReducer from './ui';
import NotificationsReducer from './notifications';
import PersistReducer from './persist';

export default combineReducers({
    auth: AuthReducer,
    ui: UiReducer,
    persist: PersistReducer,
    notifications: NotificationsReducer,
});