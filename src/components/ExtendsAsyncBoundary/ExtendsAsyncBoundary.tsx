import AsyncBoundary from 'components/AsyncBoundary/AsyncBoundary';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof AsyncBoundary>;

export default function ExtendsAsyncBoundary({ pendingFallback = <>loading</>, rejectedFallback = ({ error }) => <>error {error}</>, ...props }: Props) {
  return (
    <AsyncBoundary
      pendingFallback={pendingFallback}
      rejectedFallback={({ error, reset }) => {
        // if (isExpectedError(error)) {
        //   return rejectedFallback({ error, reset });
        // }
        // Sentry.captureError(error);
        return rejectedFallback({ error, reset });
      }}
      {...props}
    />
  );
}
