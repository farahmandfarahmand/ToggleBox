import React from "react"
 export default function Boxes(props){
    const boxess=props.boxes.map(i=>{
       
            if(props.activeBoxes.includes(i.id)){
return   <div className="box">{i.title} </div>
            }
       
    })
    return(
        <div className="box-wrapper">
      {boxess}
 
    </div>
    )

 }