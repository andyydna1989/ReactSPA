import { useState } from "react";
import CustomForm from "../components/CustomForm";

const Contact = () =>{

    

    const submitHandler =(valuesArray)=>{
        //This would usually be send to the backend with the Fetch API, but there is no need for it on this demo site.
        // if you've not seen it already, there is a simple Fetch implementation on the Home page, and a basic Express server in the 
        //Backend folder.
        console.log(valuesArray);
    }

    const validationHandler =(value, input)=>{

        switch (input){
            case 'Name':
                console.log(testVar);
                if (value.length > 0){
                    return true;
                }
                
                else {return false};
                break;
            case 'Email':
                if(value.includes('@') && value.includes('.')){
                    return true;
                }
                else {return false};
                break;
            case 'Description':
                if (value.length > 0){
                    return true;
                }
                else {return false};
                break;
                default: return false;
        }
    }

    const [inputsArray, setInputsArray] = useState ([
         {
            name: 'Name',
            label: 'Name',
            type: 'text',
            valid: true,
            invalidMsg: 'Please input a name'

        },

        {
            name: 'Email',
            label: 'Email Address',
            type: 'email',
            valid: true,
            invalidMsg: 'Please check your email'

        }
        ,
        {
            name: 'Description',
            label: 'Your question/request',
            type: 'text',
            valid: true,
            invalidMsg: 'Please add a description of your query'

        }
    ])
    return(<div className=" mt-8 w-2/3 flex flex-col h-full shadow-md m-auto">
    <CustomForm message="Please add your details below and we'll get in touch!" inputsArray={inputsArray} submitHandler={submitHandler} blur={validationHandler}></CustomForm>
    </div>)
}

export default Contact;