import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("LOG ERROR", { error, info });
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      return fallback || <p>Oops! Something went Wrong!</p>;
    }

    return children;
  }
}

export default ErrorBoundary;
