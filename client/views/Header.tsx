import HeaderInterface from '../viewInterfaces/Header';
import { ReflowReactComponent } from '@mcesystems/reflow-react-display-layer';
import * as React from 'react';

export class Header extends ReflowReactComponent<HeaderInterface> {
  render() {
    const {} = this.props;
    return (
      <h2 className='ui icon header container'>
        <i className='usb icon blue' />
        <div className='content'>Device List Connected</div>
      </h2>
    );
  }
}
