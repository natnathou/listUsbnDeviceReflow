import { ActionTypes, Device } from '.';

export interface AddDeviceAction {
  type: ActionTypes.ADD_DEVICE;
  payload: Device;
}

export const addDevice = (device: Device): AddDeviceAction => {
  return {
    type: ActionTypes.ADD_DEVICE,
    payload: device,
  };
};
