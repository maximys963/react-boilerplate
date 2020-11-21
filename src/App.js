import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'

const Warning = React.lazy(() => import('./components/Warning'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Hello</div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count > 5 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </div>
  )
}

export default hot(module)(App)
