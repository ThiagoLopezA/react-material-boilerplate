import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

export default function NotFoundProvider({ children, notFoundPage }) {
  return (
    <Routes>
      <Route path="*" element={notFoundPage} />
      {children}
    </Routes>
  );
}
