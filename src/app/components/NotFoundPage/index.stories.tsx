import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { NotFoundPage } from './index';

export default {
  title: 'NotFound',
  component: NotFoundPage,
};

export const main = () => (
  <HelmetProvider>
    <NotFoundPage />
  </HelmetProvider>
);
