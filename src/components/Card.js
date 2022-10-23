import React, { useState } from "react";


const Card = ( props ) => {

    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <div id='card'>
           
                <input type='file' name='myImage' 
                 onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                
                ></input>
                {selectedImage && 
                
                    <img alt="not-found" width='250' src={URL.createObjectURL(selectedImage)} ></img>
                }
                <h3>NOMBRE</h3>
                <p>descripcion</p>
    

        </div>
    );
}

export default Card;
