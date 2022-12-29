import ExtendsAsyncBoundary from 'components/ExtendsAsyncBoundary/ExtendsAsyncBoundary';
import React from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import MockList from './components/MockList/MockList';

export default function QueryTest() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      {/* 로딩 상태인지 판단 불필요 */}
      {/* <Suspense fallback={<>loading!!!</>}>
        <ErrorBoundary
          resetKeys={[]}
          onReset={reset}
          renderFallback={({ error, reset }) => {
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
        >
          <MockList></MockList>
        </ErrorBoundary>
      </Suspense> */}
      <ExtendsAsyncBoundary pendingFallback={<>loading</>} rejectedFallback={({ error }) => <>error</>}>
        <MockList></MockList>
      </ExtendsAsyncBoundary>
    </div>
  );
}
