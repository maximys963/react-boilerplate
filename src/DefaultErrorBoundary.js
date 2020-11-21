import React, { PureComponent } from 'react'

class DefaultErrorBoundary extends PureComponent {
  state = {
    isError: false,
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props

    return <>{isError ? <div>something wrong :(</div> : children}</>
  }
}

export default DefaultErrorBoundary
