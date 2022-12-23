import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/login" element={<>Login</>} />
      <Route path="/register" element={<>register</>} />
    </Routes>
  );
}
