import { ViewInterface } from '@mcesystems/reflow';

export interface Input {}

export interface Events {}

export interface Output {}

export default interface App extends ViewInterface<Input, Events, Output> {}
