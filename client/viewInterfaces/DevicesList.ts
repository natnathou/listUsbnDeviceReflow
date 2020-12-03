import { ViewInterface } from '@mcesystems/reflow';
import { AddDeviceAction, Device, RemoveDeviceAction } from '../actions';
import { DeviceListState } from '../reducers/devicesListReducer.ts';

export interface Input {
  devicesList: DeviceListState;
  fetchDevicesList: Function;
  addDevice: (data: Device) => AddDeviceAction;
  removeDevice: (data: Device) => RemoveDeviceAction;
}

export interface Output {
  devicesList: DeviceListState;
  fetchDevicesList: Function;
  addDevice: (data: Device) => AddDeviceAction;
  removeDevice: (data: Device) => RemoveDeviceAction;
}

export interface Events {}

export default interface DevicesList
  extends ViewInterface<Input, Events, Output> {}
