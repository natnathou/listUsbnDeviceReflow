import {
  Action,
  ActionTypes,
  Device,
  AddDeviceAction,
  RemoveDeviceAction,
} from '../actions';
import * as _ from 'lodash';
import { AxiosResponse } from 'axios';

export interface DeviceListState {
  devicesList: { [idProduct: number]: Device };
  error: any;
}

export const initialStateDevice: DeviceListState = {
  devicesList: {},
  error: false,
};

export const deviceListReducer = (
  state: DeviceListState = initialStateDevice,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_DEVICES_LIST:
      if (action.payload.response) {
        let results = action.payload.response as AxiosResponse<Device[]>;

        return {
          ...state,
          devicesList: {
            ..._.mapKeys(results.data, (values) => {
              return values.deviceDescriptor.idProduct;
            }),
          },
          error: action.payload.error,
        };
      } else {
        return {
          ...state,
          error: action.payload.error,
        };
      }
    case ActionTypes.ADD_DEVICE:
      return {
        ...state,
        devicesList: {
          ...state.devicesList,
          [action.payload.deviceDescriptor.idProduct]: action.payload,
        },
      };
    case ActionTypes.REMOVE_DEVICE:
      return {
        ...state,
        devicesList: {
          ..._.omit(state.devicesList, [
            action.payload.deviceDescriptor.idProduct,
          ]),
        },
      };

    default:
      return { ...state };
  }
};
