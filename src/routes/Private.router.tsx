import React from 'react';
import { Route } from 'react-router-dom';
import NotFoundProvider from '../components/NotFoundProvider/NotFoundProvider';

export default function PrivateRouter() {
  return (
    <NotFoundProvider notFoundPage={<div>Not Found Private</div>}>
      <Route index element={<div>Guard</div>} />;
      <Route path="child" element={<div>Child</div>} />;
    </NotFoundProvider>
  );
}
