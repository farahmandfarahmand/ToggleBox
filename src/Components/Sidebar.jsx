import React from "react";
import Toggel from "./Toggel";

export default function Sidebar(props){


    const toggle = props.boxes.map(box => {
        return <Toggel
            handeleToggle={props.handeleToggle}
            activeBoxes={props.activeBoxes}
            box={box} />
    })

    return (
        <aside>
            {toggle}
        </aside>
    )
/*const toggel=props.boxes.map(box=>{
    return(
          
          <div className="toggle">
                <span>{box.title}</span>
                <label className="toggle-control">
                    <input type="checkbox" checked={props.activeBoxes.include(box.id)}/>
                    <span className="control" onClick={(e)=> props.handelToggelBtn(box.id)}></span>
                </label>
            </div>
            
     
        )
})
   
return(
    <aside>  
        {toggel}
           </aside>
)*/
 }