import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundProvider from '../components/NotFoundProvider/NotFoundProvider';

export default function PrivateRouter() {
  return (
    <Routes>
      <Route index element={<div>Guard</div>} />;
      <Route path="child" element={<div>Child</div>} />;
    </Routes>
  );
}
