import DevicesList from '../viewInterfaces/DevicesList';
import { ReflowReactComponent } from '@mcesystems/reflow-react-display-layer';
import * as React from 'react';
import { connect } from 'react-redux';
import {
  fetchDevicesList,
  addDevice,
  removeDevice,
  Device,
  AddDeviceAction,
  RemoveDeviceAction,
} from '../actions';
import * as _ from 'lodash';
import * as io from 'socket.io-client';
import { StoreState } from '../reducers';
import { DeviceListState } from '../reducers/devicesListReducer.ts';

const ENDPOINT = 'http://localhost:5001/';

interface DevicesListProps {
  devicesList: DeviceListState;
  fetchDevicesList: Function;
  addDevice: (data: Device) => AddDeviceAction;
  removeDevice: (data: Device) => RemoveDeviceAction;
}
export class _DevicesList extends ReflowReactComponent<DevicesList> {
  componentDidMount() {
    const { fetchDevicesList, addDevice, removeDevice } = this.props;

    fetchDevicesList();

    const socket = io.connect(ENDPOINT);
    socket.on('usb_adding', (data: Device) => {
      addDevice(data);
    });
    socket.on('usb_removing', (data: Device) => {
      removeDevice(data);
    });
  }

  listRendering = () => {
    const { devicesList } = this.props;
    return _.toArray(devicesList.devicesList).map(
      (data: Device, index: number) => {
        return (
          <div key={index} className='row'>
            <div className='cel'>{data._parent ? `HUB` : `USB`}</div>
            <div className='cel'>{data.deviceDescriptor.idProduct}</div>
            <div className='cel'>{data.deviceDescriptor.idVendor}</div>
            <div className='cel'>
              {data.allConfigDescriptors
                ? data.allConfigDescriptors.map((datas) =>
                    datas.extra.toString('utf-8')
                  )
                : null}
            </div>
          </div>
        );
      }
    );
  };

  render() {
    const { devicesList } = this.props;

    return (
      <div className='Table'>
        <div className='row'>
          <div className='cel header'>TYPE</div>
          <div className='cel header'>PRODUCT ID</div>
          <div className='cel header'>VENDOR ID</div>
          <div className='cel header'>DESCRIPTION</div>
        </div>

        {devicesList.devicesList ? this.listRendering() : null}
      </div>
    );
  }
}

const mapStateToProps = ({
  devicesList,
}: StoreState): { devicesList: DeviceListState } => {
  return { devicesList };
};

export const DevicesList = connect(mapStateToProps, {
  fetchDevicesList,
  addDevice,
  removeDevice,
})(_DevicesList);
