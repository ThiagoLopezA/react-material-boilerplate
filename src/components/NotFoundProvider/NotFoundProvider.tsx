import React from 'react';
import { Routes, Route } from 'react-router-dom';

interface Props {
  notFoundPage: React.ReactNode;
  children: React.ReactNode;
}

export default function NotFoundProvider({ notFoundPage, children }: Props) {
  return (
    <Routes>
      <Route path="*" element={notFoundPage} />
      {children}
    </Routes>
  );
}
