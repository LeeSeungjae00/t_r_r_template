import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import MockList from './components/MockList/MockList';

export default function QueryTest() {
  const { reset: resetQery } = useQueryErrorResetBoundary();
  return (
    <div>
      {/* 로딩 상태인지 판단 불필요 */}
      <Suspense fallback={<>loading!!!</>}>
        <ErrorBoundary
          resetKeys={[]}
          renderFallback={({ error, reset }) => {
            return (
              <>
                error 발생!!({error.message})
                <button
                  onClick={e => {
                    resetQery();
                    reset();
                  }}
                >
                  reset
                </button>
              </>
            );
          }}
        >
          <MockList></MockList>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
