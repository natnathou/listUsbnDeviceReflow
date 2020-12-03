import { Flow } from '@mcesystems/reflow';
import { addDevice, Device, removeDevice } from '../actions';

import { ViewInterfacesType } from '../viewInterfaces';

export default <Flow<ViewInterfacesType>>(async ({ view, views }) => {
  view(0, views.App, {});

  // awaiting a never-ending promise to hang the flow
  await new Promise(() => {});
});
