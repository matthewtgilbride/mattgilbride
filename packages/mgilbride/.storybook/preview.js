import React, { Fragment } from 'react'
import { Global } from '@emotion/core';
import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
import { documentReset, meyerReset } from '../src/components/layout/Layout.styles';

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {} // defaults to using addon actions integration, can override any method in the router
  })
);

const resetDecorator = Story => <Fragment><Global styles={meyerReset} /><Global styles={documentReset} /><Story /></Fragment>

addDecorator(resetDecorator)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
