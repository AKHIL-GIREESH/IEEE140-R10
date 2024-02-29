import { useState } from "react"
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const Carousal = () => {

    const [image,setImage] = useState(0)

    let imgList = []
    for(let i=0;i<5;i++){
        imgList.push(
        <div style={{height:"70vh",minWidth:"100%",backgroundImage: 'url("https://burst.shopifycdn.com/photos/fog-on-dark-waters-edge.jpg?width=925&exif=0&iptc=0")',backgroundSize:"cover",fontSize:"30px",color:"black"}} key={i}>
            Image{i}
        </div>)
    }


    return(
        <div style={{height:"80vh",width:"100vw"}}>
            <div style={{display:"flex",height:"70vh",width:"80vw",marginLeft:"10vw",overflow:"hidden",marginTop:"5vh",borderRadius:"10px"}}>
                {imgList[image]} 
                <button style={{border:"none",position:"absolute",marginTop:"31vh",marginLeft:"2vw",borderRadius:"2.5em",height:"7vh",width:"7vh",backgroundColor:"#0073DD"}} onClick={() => setImage(prev => {
                    if(prev === 0){
                        return 4
                    }
                    return prev-1
                })}><FaArrowLeft style={{fontSize:"2em"}}/></button> 
                <button style={{border:"none",position:"absolute",marginTop:"31vh",marginLeft:"74vw",borderRadius:"2.5em",height:"7vh",width:"7vh",backgroundColor:"#0073DD"}} onClick={()=>setImage(prev => (prev+1)%5)}><FaArrowRight style={{fontSize:"2em"}}/></button>
            </div>
        </div>
    )
}

export default Carousal