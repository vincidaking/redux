import  React, {useState}  from "react";
import { connect } from "react-redux";

import {addRate,editRate} from './actions/appActions'


 const Form = (
    {
    author='',
    comment, 
    id, 
    rate=0,
    callback, 
    addRate,
    editRate
    }) => {

    const [authorInput,setAuthorInput] = useState(author);
    const [rateInput,setRateInput] = useState(rate);
    const [commentInput,setCommentInput] = useState(comment);

    const hanleChangeAuthor = event =>
     setAuthorInput(event.target.value)

     const hanleChangeRate = event =>
     setRateInput(event.target.value)

     const hanleChangeComment = event =>
     setCommentInput(event.target.value)


    const handleOnSumbit= event => {
        event.preventDefault();
       
        if(!authorInput.length){
            return;
        }

        const rateObject = { 
            author:authorInput,
            comment:commentInput,
            rate:Number(rateInput),
            id
        }

        console.log(rateObject)

        id ? editRate(rateObject) : addRate(rateObject)

        if(id)
        {
         callback();
        }

    }

    return(
        <form onSubmit={handleOnSumbit}>
            <div>
                <label>
                    Autor:
                    <input type="text"
                        onChange={hanleChangeAuthor}
                        value={authorInput}
                    /> 
                </label>
            </div>
            <div>
                <label>
                    Ocena:
                    <input type="number"
                        onChange={hanleChangeRate}
                        value={rateInput}
                    /> 
                </label>
            </div>
            <div>
                <label>
                    komentarz:
                    <input type="text"
                        onChange={hanleChangeComment}
                        value={commentInput}
                    /> 
                </label>
            </div>
        <button type="submit">
             {id?"Edycja": "Dodaj"}
        </button>

        </form>
    )
}


const connectActionsToProps = ({
    addRate, editRate
})

const FormConsumer = connect(null,connectActionsToProps )(Form)


export default FormConsumer