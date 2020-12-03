import { combineReducers } from 'redux';
import { Action } from '../actions';
import { deviceListReducer, DeviceListState } from './devicesListReducer.ts';

export interface StoreState {
  devicesList: DeviceListState;
}

export default combineReducers<StoreState, Action>({
  devicesList: deviceListReducer,
});
