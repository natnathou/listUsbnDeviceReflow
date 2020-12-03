import { ActionTypes, Action } from '.';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

export interface Device {
  deviceDescriptor: {
    idVendor: number;
    idProduct: number;
  };
  _parent: {}[] | null;
  allConfigDescriptors: { extra: Buffer }[];
}

export interface FetchDevicesListAction {
  type: ActionTypes.FETCH_DEVICES_LIST;
  payload: { response: AxiosResponse<Device[]> | boolean; error: boolean };
}
export const fetchDevicesList = () => async (dispatch: Dispatch) => {
  let response: AxiosResponse<Device[]> | boolean = false;
  let error: any;

  console.log('actin');
  try {
    response = await axios.get<Device[]>(
      `http://localhost:5000/server/fetch_usb_devises`
    );
  } catch (e) {
    error = e;
  }

  dispatch<FetchDevicesListAction>({
    type: ActionTypes.FETCH_DEVICES_LIST,
    payload: { response, error },
  });
};
