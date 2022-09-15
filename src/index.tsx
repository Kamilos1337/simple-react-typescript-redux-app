import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import GlobalStyle from './global.css'
import { OfferPage } from './pages/OfferPage'
import { ShippingPage } from './pages/ShippingPage'
import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/offer" element={<OfferPage/>}/>
        <Route path="/shipping" element={<ShippingPage/>}/>
      </Routes>
    </Provider>
    <GlobalStyle/>
  </BrowserRouter>
)
