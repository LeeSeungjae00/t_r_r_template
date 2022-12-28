import React, { Suspense } from 'react';
import MockList from './components/MockList/MockList';

export default function QueryTest() {
  return (
    <div>
      {/* 로딩 상태인지 판단 불필요 */}
      <Suspense fallback={<>loading!!!</>}>
        <MockList></MockList>
      </Suspense>
    </div>
  );
}
