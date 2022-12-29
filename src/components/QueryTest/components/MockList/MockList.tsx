import { useGetMockData } from 'hooks/query/useGetMockData';
import React from 'react';

export default function () {
  const { data } = useGetMockData({ storeCode: 'GET_MOCK', options: { suspense: true, retry: false } });
  return (
    <div>
      {data?.map(val => (
        <div>{val.title}</div>
      ))}
    </div>
  );
}
