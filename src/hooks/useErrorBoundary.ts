import { useState } from 'react';

//usage
//이 hooks를 통해 반환되는 setError를 catch statement에서 실행하면 컴포넌트 레벨에서 발생한 에러이므로 가장 가까운 ErrorBoundary가 catch하게 된다.

export default function useErrorBoundary<ErrorType extends Error>() {
  const [error, setError] = useState<ErrorType | null>(null);

  if (error != null) {
    throw error;
  }

  return setError;
}
