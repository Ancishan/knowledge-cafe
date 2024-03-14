import PropTypes from 'prop-types'; 
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ( {blog,handleAddToMark, handleMarkAsRead} ) => {
    const {title, cover, author_img, author, posted_date, reading_time_minutes, hashtags} = blog;
    return (
        <div  >
            <img className='w-full mb-4' src={cover} alt={`cover picture of the title${title}`}/>
            <div className='flex justify-between'>
            <div className='flex gap-2'>
            <div>
            <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt={`cover picture of the title${title}`}/>
            </div>
            <div>
                <h1>{author}</h1>
                <p>{posted_date}</p>
            </div>
           </div>
                <div className='flex gap-2'>
                    <div>
                    <p>{reading_time_minutes} min read time</p>
                    </div>
                   <div>
                   <button onClick={() => handleAddToMark(blog)}><MdOutlineBookmarks></MdOutlineBookmarks></button>
                   </div>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hashtags}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time_minutes)} className='underline text-purple-800'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
 export default Blog;