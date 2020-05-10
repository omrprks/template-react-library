import React, { ReactElement } from 'react';
import { App } from '.';

export default {
  title: 'App',
};

export const innerText = 'Hello World!';

export const Default = (): ReactElement => (
  <App>
    <div style={{ margin: 15 }}>{innerText}</div>
  </App>
);
