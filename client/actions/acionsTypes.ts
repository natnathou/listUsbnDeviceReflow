import {
  AddDeviceAction,
  RemoveDeviceAction,
  FetchDevicesListAction,
} from './index';

export enum ActionTypes {
  FETCH_DEVICES_LIST = 'FETCH_DEVICES_LIST',
  ADD_DEVICE = 'ADD_DEVICE',
  REMOVE_DEVICE = 'REMOVE_DEVICE',
}

export type Action =
  | AddDeviceAction
  | RemoveDeviceAction
  | FetchDevicesListAction;
