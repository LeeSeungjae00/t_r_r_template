import React, { Component, ErrorInfo, ReactNode } from 'react';

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

type RenderFallbackType = <ErrorType extends Error>(props: RenderFallbackProps<ErrorType>) => ReactNode;

interface Props {
  children?: ReactNode;
  renderFallback: RenderFallbackType;
  resetKeys?: unknown[];
  onReset?: () => void;
}

interface State {
  error: Error | null;
}

const initialState = {
  error: null,
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = { ...initialState };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
    });
    console.error('Uncaught error:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    // ErrorBoundary state를 초기화
    this.setState({ ...initialState });
    this.props.onReset && this.props.onReset();
  };

  componentDidUpdate(prevProps: Props) {
    if (this.state.error == null) {
      return;
    }
    if (this.props.resetKeys && JSON.stringify(prevProps.resetKeys) === JSON.stringify(this.props.resetKeys)) {
      this.resetErrorBoundary();
      // Trigger Reset
    }
  }

  public render() {
    if (this.state.error === null) {
      return this.props.children;
    }
    return this.props.renderFallback({ error: this.state.error, reset: this.resetErrorBoundary });
  }
}

export default ErrorBoundary;
