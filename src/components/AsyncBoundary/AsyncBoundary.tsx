import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { ComponentProps, Suspense } from 'react';

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface Props extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback: ComponentProps<typeof Suspense>['fallback'];
  rejectedFallback: ErrorBoundaryProps['renderFallback'];
}

function AsyncBoundary({ pendingFallback, rejectedFallback, children, ...errorBoundaryProps }: Props) {
  return (
    <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
      <Suspense fallback={pendingFallback}>
        {children} {/* <- fulfilled */}
      </Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
