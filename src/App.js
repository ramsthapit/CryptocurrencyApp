import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} exact />
              <Route path='/exchanges' element={<Exchanges />} exact />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} exact />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} exact />
              <Route path='/news' element={<News />} exact />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color:'white', textAlign: 'center' }}>
            Cryptoverse<br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App