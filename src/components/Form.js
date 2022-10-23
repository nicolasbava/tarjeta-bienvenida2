import React, { useRef } from 'react';
import updateWord from '../store/action';
import { connect } from 'react-redux' 

const Form = ({ updateWord }) => {
    

    const palabraRef = useRef(null)


    return (
        <div>
            <input ref={palabraRef} type='text' placeholder='Ingresa un nombre destinatario' ></input>
            <button onClick={() => {updateWord(palabraRef.current.value)}} >enviar</button>
            
            
            {/* <input type='text' placeholder='Ingresa tu nombre'></input>
            <input type='file' placeholder='Ingresa una foto'></input> */}
        </div>
    );
}

export default connect(null, { updateWord })(Form);
