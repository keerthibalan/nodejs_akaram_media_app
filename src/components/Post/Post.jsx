import React from "react";
import './Post.css'

import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({data}) =>{
    return(
        <div className="Post">
           <img src={data.img} alt=""/>
           <div className="PostReact">
               <img src={data.liked?Heart: NotLike} alt=""/>
               <img src={Comment} alt=""/>
               <img src={Share} alt=""/>
           </div>
           <span style={{color: "var(--gray)",fornSize: '12px' }}> {data.likes} likes</span>
           <div className="detail">
              <span><b> {data.name}</b></span>
              <spam> {data.desc}</spam>
           </div>
        </div>
    )
       
}

export default Post