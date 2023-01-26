import { useState } from "react";

const CustomForm = (props)=>{

    const [returnObj, setReturnObj] = useState({});
    const [inputsArray, setInputsArray] = useState(props.inputsArray);
    const [validationUpdater, setValidationUpdater] = useState(true);
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const submitHandler =(e)=>{
        e.preventDefault();
        if (checkValidityOnSend()){
            console.log('sent');
        props.submitHandler(returnObj);
        }
        else console.log('validation issue')
    };

    const checkValidityOnSend=()=>{
        let invalCounter = 0;
        for (let entry of inputsArray){
            console.log(entry);
            if (entry.valid === false){
                invalCounter++;
            }

        }
        if (!invalCounter){
            return true;
        }
        else return false;
    }
    

   const updateReturnObj = (e)=>{

    setReturnObj((prevState) => {
        const key = e.target.name;
        prevState[key] = e.target.value;
        console.log(prevState);
        return (prevState);
    }

   )}

   const processValidation=(e)=>{
    
    const isValid = props.blur(e.target.value, e.target.name);
    actionValidityResult(isValid, e.target.name);
    setButtonEnabled(true);
    
    };
   
  const actionValidityResult=(isValid, nameValue)=>{
   
    if (!isValid){
        for (let i=0; i<inputsArray.length; i++){
            if (inputsArray[i].name === nameValue){
                setInputsArray((prevState)=>{
                    console.log(prevState);
                    prevState[i].valid = false;
                    console.log(prevState);
                    setValidationUpdater(!validationUpdater)
                    return prevState;
                })
            }
        }
    }
   if (isValid){
    for (let i=0; i<inputsArray.length; i++){
        if (inputsArray[i].name === nameValue){
            setInputsArray((prevState)=>{
                console.log(prevState);
                prevState[i].valid = true;
                console.log(prevState);
                setValidationUpdater(!validationUpdater)
                return prevState;
            })
        }
    }
   }
  }

    return(
        
        <form>
        <p className="m-5 text-lg font-bold p-5 md:text-xl ">{props.message}</p>
        {props.inputsArray.map((input, index)=>{
            
            return (
                <div key={index} className=" m-3 w-11/12 flex flex-row align-middle justify-between min-h-1/3 shadow-sm">
                <label htmlFor={input.name} className={input.valid ? "m-2 w-1/4" : "m-2 w-1/4 text-red-500"}>{input.valid ? input.label : input.invalidMsg} </label>
                
                <input type={input.type} onBlur={processValidation} name={input.name} onChange={updateReturnObj} className={input.valid ? 'm-5 w-1/2 border-solid border-2 border-black rounded-md p-2' : ' w-1/2 m-5 border-dotted border-2 rounded-md p-2 bg-red-200'}></input>
              
                </div>
            )
        })}
        <button onClick={submitHandler} className="disabled:opacity-50 w-full font-bold bg-red-500 text-xl m-auto text-white hover:bg-red-200 hover:text-black rounded-lg">Submit</button>
        </form>
        
    )
}

export default CustomForm;