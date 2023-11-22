import React from 'react'
import BookImage from 'components/BookImage'
import Title from 'components/Title'
import Author from 'components/Author'

const Book = (props) => {
  console.log(props.book)
  return (
    <div className="book">
      <BookImage image={props.book.image} />
      <Title title={props.book.title} />
      <Author author={props.book.author} />
    </div>
  )
}

export default Book
