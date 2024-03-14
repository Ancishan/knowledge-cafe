
import PropTypes from 'prop-types'
import BookMarked from './BookMarked/BookMarked'

const Bookmarks = ({bookMarks, readingTime}) => {
  return (
        <div className="md:w-1/3 text-3xl bg-slate-200 mt-2">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h1 className='text-center pt-3 pb-3'>BookMarked Blog: {bookMarks.length}</h1>
            {
                bookMarks.map( bookmark => <BookMarked bookmark={bookmark}></BookMarked>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks