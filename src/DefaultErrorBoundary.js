import React, { PureComponent } from 'react'
import propType from 'prop-types'

class DefaultErrorBoundary extends PureComponent {
  state = {
    isError: false,
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  static propType = {
    children: propType.node.isRequired,
  }

  render() {
    const { isError } = this.state
    const { children } = this.props

    return <>{isError ? <div>something wrong :(</div> : children}</>
  }
}

export default DefaultErrorBoundary
