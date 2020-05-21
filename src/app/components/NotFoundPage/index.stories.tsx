import React from 'react';
import { NotFoundPage } from './index';
import { HelmetProvider } from 'react-helmet-async';

export default {
  title: 'NotFound',
  component: NotFoundPage,
};

export const main = () => (
  <HelmetProvider>
    <NotFoundPage />
  </HelmetProvider>
);
