import React,{useState} from 'react';
import { IoMdClose } from "react-icons/io";
import './gallery.css'
import Img1 from './Gallery/img1.jpg'
import Img2 from './Gallery/img2.jpg'
import Img3 from './Gallery/img3.jpg'
import Img4 from './Gallery/img4.jpg'
import Img5 from './Gallery/img5.jpg'
import Img6 from './Gallery/img6.jpg'
import Img7 from './Gallery/img7.jpg'
import Img8 from './Gallery/img8.jpg'
import Img9 from './Gallery/img9.jpg'
import Img10 from './Gallery/img10.jpg'
import Img11 from './Gallery/img11.jpg'
import Img12 from './Gallery/img12.jpg'
import Img13 from './Gallery/img13.jpg'
import Img14 from './Gallery/img14.jpg'
import Img15 from './Gallery/img15.jpg'
import Img16 from './Gallery/img16.jpg'
import Img17 from './Gallery/img17.jpg'
import Img18 from './Gallery/img18.jpg'
import Img19 from './Gallery/img19.jpg'
import Img20 from './Gallery/img20.jpg'
import Img21 from './Gallery/img22.jpg'
import Img22 from './Gallery/img23.jpg'
import Img23 from './Gallery/img24.jpg'
import Img24 from './Gallery/img25.jpg'
import Img25 from './Gallery/img26.jpg'
import Img26 from './Gallery/img27.jpg'
import Img27 from './Gallery/img28.jpg'
import Img28 from './Gallery/img29.jpg'
import Img29 from './Gallery/img21.jpg'

const gallery = () =>{

    let data = [
     
     {
     	id:1,
     	imgSrc: Img1,
     },
     {
     	id:2,
     	imgSrc: Img2,
     },
     {
     	id:3,
     	imgSrc: Img3,
     },
     {
     	id:4,
     	imgSrc: Img4,
     },
     {
     	id:5,
     	imgSrc: Img5,
     },
     {
     	id:6,
     	imgSrc: Img6,
     },
     {
     	id:7,
     	imgSrc: Img7,
     },
     {
     	id:8,
     	imgSrc: Img8,
     },
     {
     	id:9,
     	imgSrc: Img9,
     },
     {
     	id:10,
     	imgSrc: Img10,
     },
     {
     	id:11,
     	imgSrc: Img11,
     },
     {
     	id:12,
     	imgSrc: Img12,
     },
     {
     	id:13,
     	imgSrc: Img13,
     },
     {
     	id:14,
     	imgSrc: Img14,
     },
     {
     	id:15,
     	imgSrc: Img15,
     },
     {
     	id:16,
     	imgSrc: Img16,
     },
     {
     	id:17,
     	imgSrc: Img17,
     },
     {
     	id:18,
     	imgSrc: Img18,
     },
     {
     	id:19,
     	imgSrc: Img19,
     },
     {
     	id:20,
     	imgSrc: Img20,
     },
     {
     	id:21,
     	imgSrc: Img21,
     },
     {
     	id:22,
     	imgSrc: Img22,
     },
     {
     	id:23,
     	imgSrc: Img23,
     },
     {
     	id:24,
     	imgSrc: Img24,
     },
     {
     	id:25,
     	imgSrc: Img25,
     },
     {
     	id:26,
     	imgSrc: Img26,
     },
     {
     	id:27,
     	imgSrc: Img27,
     },
     {
     	id:28,
     	imgSrc: Img28,
     },
     {
     	id:29,
     	imgSrc: Img29,
     }
    	]
    const[model, setModel] = useState(false);
    const[tempimgSrc, setTempimgSrc]= useState('');
    function getImg(imgSrc){
        setTempimgSrc(imgSrc);
        setModel(true);
    }

	return (
		<>
		   <div className={model? "model open" : "model"}>
             <IoMdClose className="close-icon" onClick={() => setModel(false)}/>
             <img src={tempimgSrc} alt="image" />
		   </div> 
           <div className="gallery">
             {data.map((item,index)=>{
             	return (
                 <div className = "pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                   <img alt="image" src={item.imgSrc} style={{width: '100%'}} />
                 </div>
             		)
             })}
           </div>
		</>
       
	)
}

export default gallery;