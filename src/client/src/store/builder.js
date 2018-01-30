import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxInject from 'redux-inject'
import { createLogger } from 'redux-logger'

export default function({ initialState = {}, reducer, dependencies }) {
  const middlewares = [reduxInject(dependencies), reduxThunk]
  if (process.env.NODE_ENV === 'local') {
    middlewares.push(createLogger({ collapsed: true, timestamp: false }))
  }

  const store = window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        reducer,
        initialState,
        compose(
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__({
              name: 'SportRadar',
              instanceId: 'SportRadar',
            })
        )
      )
    : createStore(
        reducer,
        initialState,
        compose(applyMiddleware(...middlewares))
      )

  return store
}
