import React from 'react';
import { useAsync, useFetchAndLoad } from '../hooks';
import { exampleService } from '../services/example.service';

export default function AsyncComponentExample() {
  const { callEndpoint, loading } = useFetchAndLoad();
  const getRequest = () => callEndpoint(exampleService());
  useAsync(
    getRequest,
    (data: any) => console.log(data),
    () => {}
  );
  return <div>{loading ? <>Cargando...</> : <>Cargado!</>}</div>;
}
