import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}> 
   <img  src= 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'/>
    { props.message }
    <div>
      <span>like</span> { props.likesCount } 
    </div>

  </div>
}

export default Post;
 


