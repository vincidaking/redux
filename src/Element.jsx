import React, { useState } from 'react'
import Form from "./Form";


const Element = ({author, comment,rate},id ) => {

    const [isVisibleForm,setIsVisibleForm] = useState(false)
    
    const toggleElements= () => setIsVisibleForm(prev=>!prev)

    const formOrButtonElemen = isVisibleForm?(
        <Form
            author={author}
            comment={comment}
            id={id}
            callback={toggleElements}
            rate={rate}
        
        />
    )
        :
        (
            <button onClick={toggleElements}>
                Edytuj Ksiazke 
            </button>
        )


    return(
        <li>
            <p>Autor:{author} </p>
            <p>Ocena:{rate} </p>
            <p>Komentarz:{comment} </p>
            {formOrButtonElemen}
        </li>
    )
}

export default Element