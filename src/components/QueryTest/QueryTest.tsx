import AsyncBoundary from 'components/AsyncBoundary/AsyncBoundary';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import MockList from './components/MockList/MockList';

export default function QueryTest() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      <AsyncBoundary
        resetKeys={[]}
        onReset={reset}
        rejectedFallback={({ error, reset }) => {
          return (
            <>
              error 발생!!({error.message})
              <button
                onClick={e => {
                  reset();
                }}
              >
                reset
              </button>
            </>
          );
        }}
        pendingFallback={<>loading!!!</>}
      >
        {/* 로딩 상태인지 판단 불필요 */}
        <MockList></MockList>
      </AsyncBoundary>
    </div>
  );
}
