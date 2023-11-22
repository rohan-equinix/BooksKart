import React, { useEffect } from 'react'
import BookList from 'components/BookList'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>Best Selling Books</h1>
      <BookList />
    </div>
  )
}

export default App
