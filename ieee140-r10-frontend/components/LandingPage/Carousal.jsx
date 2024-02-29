import { useState } from "react"

const Carousal = () => {

    const [image,setImage] = useState(0)

    let imgList = []
    for(let i=0;i<5;i++){
        imgList.push(
        <div style={{height:"70vh",minWidth:"100%",backgroundColor:"black"}} key={i}>
            Div {i}
        </div>)
    }


    return(
        <div style={{height:"100vh",width:"100vw"}}>
            <div style={{display:"flex",height:"70vh",width:"80vw",marginLeft:"10vw",overflow:"hidden"}}>
                {imgList}
            </div>
        </div>
    )
}

export default Carousal