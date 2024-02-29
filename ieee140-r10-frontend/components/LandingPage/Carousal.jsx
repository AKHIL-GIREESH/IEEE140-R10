import { useState } from "react"

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
        <div style={{height:"100vh",width:"100vw",border:"1px solid"}}>
            <div style={{display:"flex",height:"70vh",width:"80vw",marginLeft:"10vw",overflow:"hidden",marginTop:"25vh"}}>
                {imgList[image]} 
                <button style={{position:"absolute",marginTop:"35vh"}} onClick={() => setImage(prev => (prev+1)%5)}>👈</button> 
                <button style={{position:"absolute",marginTop:"35vh",marginLeft:"78vw"}} onClick={() => setImage(prev => {
                    if(prev === 0){
                        return 4
                    }
                    return prev-1
                })}>👉</button>
            </div>
        </div>
    )
}

export default Carousal