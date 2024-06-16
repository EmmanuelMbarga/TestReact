import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* nb:une apres avoir creer le store et configurer le store, creer le reducer, creer ou on souhaite avoir notre state, on englobe botre <App/> du provider */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
)
