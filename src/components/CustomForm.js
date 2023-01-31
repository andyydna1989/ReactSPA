import {useCallback, useState, useRef} from 'react';

const CustomForm = props => {
  const [returnObj, setReturnObj] = useState ({});
  const [inputsArray, setInputsArray] = useState (props.inputsArray);
  const [validationUpdater, setValidationUpdater] = useState (true);
  const [buttonText, setButtonText] = useState (
    'Complete fields to enable submission'
  );
  const formObject = useRef ();

  const submitHandler = e => {
    e.preventDefault ();
    if (checkValidityOnSend ()) {
      console.log ('sent');
      props.submitHandler (returnObj);
      formObject.current.reset ();
      setButtonText ("Thank you, we'll get back to you ASAP.");
    } else console.log ('validation issue');
  };

  const checkValidityOnSend = () => {
    let invalCounter = 0;
    for (let entry of inputsArray) {
      if (entry.valid < 2) {
        invalCounter++;
      }
    }
    if (!invalCounter) {
      return true;
    } else return false;
  };

  const updateReturnObj = e => {
    setReturnObj (prevState => {
      const key = e.target.name;
      prevState[key] = e.target.value;

      return prevState;
    });
  };

  const processValidation = e => {
    const isValid = props.blur (e.target.value, e.target.name);
    actionValidityResult (isValid, e.target.name);
  };

  const actionValidityResult = (isValid, nameValue) => {
    if (!isValid) {
      for (let i = 0; i < inputsArray.length; i++) {
        if (inputsArray[i].name === nameValue) {
          setInputsArray (prevState => {
            prevState[i].valid = 1;

            setValidationUpdater (!validationUpdater);
            return prevState;
          });
        }
      }
    }
    if (isValid) {
      for (let i = 0; i < inputsArray.length; i++) {
        if (inputsArray[i].name === nameValue) {
          setInputsArray (prevState => {
            prevState[i].valid = 2;
            setValidationUpdater (!validationUpdater);
            return prevState;
          });
        }
      }
    }
    assessButtonText ();
  };

  const assessButtonText = useCallback (
    () => {
      for (let entry of inputsArray) {
        if (entry.valid !== 2) {
          return;
        }
      }
      setButtonText ('Submit');
    },
    [inputsArray]
  );

  return (
    <form ref={formObject}>
      <p className="m-5 text-lg font-bold p-5 md:text-xl ">{props.message}</p>
      {props.inputsArray.map ((input, index) => {
        return (
          <div
            key={index}
            className=" m-3 w-11/12 flex flex-row align-middle justify-between min-h-1/3 shadow-sm"
          >
            <label
              htmlFor={input.name}
              className={
                input.valid !== 1 ? 'm-2 w-1/4' : 'm-2 w-1/4 text-red-500'
              }
            >
              {input.valid !== 1 ? input.label : input.invalidMsg}{' '}
            </label>

            <input
              data-testid="inputBox"
              type={input.type}
              onBlur={processValidation}
              name={input.name}
              onChange={updateReturnObj}
              className={
                input.valid !== 1
                  ? 'm-5 w-1/2 border-solid border-2 border-black rounded-md p-2'
                  : ' w-1/2 m-5 border-dotted border-2 rounded-md p-2 bg-red-200'
              }
            />

          </div>
        );
      })}
      <button
        onClick={submitHandler}
        className="disabled:opacity-50 w-full font-bold bg-red-500 text-xl m-auto text-white hover:bg-red-200 hover:text-black rounded-lg"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default CustomForm;
