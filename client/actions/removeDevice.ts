import { ActionTypes, Device } from '.';

export interface RemoveDeviceAction {
  type: ActionTypes.REMOVE_DEVICE;
  payload: Device;
}

export const removeDevice = (device: Device): RemoveDeviceAction => {
  return {
    type: ActionTypes.REMOVE_DEVICE,
    payload: device,
  };
};
