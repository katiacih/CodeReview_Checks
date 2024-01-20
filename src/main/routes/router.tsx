import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from '@/presentation/pages/home/home'

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router