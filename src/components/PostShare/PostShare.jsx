import React, {useState, useRef} from "react";
import ProfileImage from '../../img/profileImg.JPG'
import { useDispatch, useSelector } from "react-redux";

import './PostShare.css'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { uploadImage, uploadPost } from "../../action/PostUpload";

const PostShare = () =>{
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const {user} = useSelector((state)=>state.authReducer.authData)
    const description = useRef()
    const dispatch = useDispatch()
    const OnImageChange = (event) =>{
       if(event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        setImage(img);
       }
    }
    const handleSubmit = (e)=>{
         e.preventDefault();
        const newPost = {
            userId: user._id,
            description: description.current.value
        }
        if(image){
            const data = new FormData()
            const filename = Date.now() + image.name;
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename;
            console.log(newPost)
            try{
                dispatch(uploadImage(data))
            }catch(error){
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
    }
    return(
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input 
                 ref = {description}
                 required
                 type="text" placeholder="What's happening" />
                <div className="PostOptions">
                    <div className="option" style={{color: "var(--photo)"}} 
                    onClick={()=>imageRef.current.click()}>
                        <UilScenery/>
                        Photo
                    </div>
                    <div className="option" style={{color: "var(--video)"}}>
                        <UilPlayCircle/>
                        Video
                    </div>
                    <div className="option" style={{color: "var(--location)"}}>
                        <UilLocationPoint/>
                        Location
                    </div>
                    <div className="option" style={{color: "var(--shedule)"}}>
                        <UilSchedule/>
                        Shedule
                    </div>
                    <button className="button ps-button"
                     onClick={handleSubmit}>
                        Share
                    </button>
                    <div style={{display: "none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={OnImageChange}/>
                    </div>
                </div>
                {image && (
                    <div className="PreviewImage">
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>

        </div>
    );
}

export default PostShare