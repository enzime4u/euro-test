import React from "react";
import Error from "./_error";
import { Modal } from "./Modal";

class ErrorBoundary extends React.Component {
  state = { hasError: false, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Modal
          isOpen={this.state.hasError}
          onClose={() => this.setState({ hasError: false })}
        >
          <Error />
        </Modal>
      );
    }

    return (this.props as { children: React.ReactNode }).children;
  }
}

export default ErrorBoundary;
