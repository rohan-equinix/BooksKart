import React from 'react'
import Book from 'components/Book'
import Alc from 'images/alc.jpg'
import Club from 'images/club.jpg'
import Iki from 'images/iki.jpg'
import monk from 'images/monk.jpg'

const BookList = () => {
  let books = [
    { image: Alc, title: 'Alchemist', author: 'Paulo Cohelo' },
    { image: Club, title: '5 AM Club', author: 'Robin Sharma' },
    { image: Iki, title: 'IKGAI', author: 'Izak' },
    { image: monk, title: 'Monk Who Sold his Ferrai', author: 'Ronny' },
    { image: Alc, title: 'Alchemist', author: 'Paulo Cohelo' },
    { image: Club, title: '5 AM Club', author: 'Robin Sharma' },
    { image: Iki, title: 'IKGAI', author: 'Izak' },
    { image: monk, title: 'Monk Who Sold his Ferrai', author: 'Ronny' },
    { image: Alc, title: 'Alchemist', author: 'Paulo Cohelo' },
    { image: Club, title: '5 AM Club', author: 'Robin Sharma' },
    { image: Iki, title: 'IKGAI', author: 'Izak' },
    { image: monk, title: 'Monk Who Sold his Ferrai', author: 'Ronny' },
    { image: Alc, title: 'Alchemist', author: 'Paulo Cohelo' },
    { image: Club, title: '5 AM Club', author: 'Robin Sharma' },
    { image: Iki, title: 'IKGAI', author: 'Izak' },
    { image: monk, title: 'Monk Who Sold his Ferrai', author: 'Ronny' },
  ]

  return (
    <div className="list">
      {books.map((book) => (
        <Book book={book} key={book.title} />
      ))}
    </div>
  )
}

export default BookList
