
import './App.css'
import Header from './assets/Components/Header/Header'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
const[bookMarks, setBookMarks] = useState([]);
const[readingTime, setReadingTime] =useState(0);

const handleAddToMark = blog => {
 const newBookMark = [...bookMarks, blog];
 setBookMarks(newBookMark);
}

const handleMarkAsRead = time => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
}

  return (
    <>
    <Header></Header>
    <hr />
      <div className='md:flex gap-48 max-w-7xl mx-auto'>
    
      <Blogs handleAddToMark={handleAddToMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
