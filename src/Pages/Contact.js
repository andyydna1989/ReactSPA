import {useState} from 'react';
import CustomForm from '../components/CustomForm';


// this component makes use of the customForm element to generate a simple 'contact us' form. This would have been far simpler with a bespoke
// form, but the intent is to have a reusable template that could be deployed in other parts of an app.

const Contact = () => {
  const submitHandler = valuesArray => {
    //This would usually be send to the backend with the Fetch API, but there is no need for it on this demo site.
    // if you've not seen it already, there is a simple Fetch implementation on the Home page, and a basic Express server in the
    //Backend folder.
    console.log (valuesArray);
  };

  const validationHandler = (value, input) => {
    switch (input) {
      case 'Name':
        if (value.length > 0) {
          return true;
        } else {
          return false;
        }
        
      case 'Email':
        if (value.includes ('@') && value.includes ('.')) {
          return true;
        } else {
          return false;
        }
        
      case 'Description':
        if (value.length > 0) {
          return true;
        } else {
          return false;
        }
     
      default:
        return false;
    }
  };

  const [inputsArray] = useState ([
    {
      name: 'Name',
      label: 'Name',
      type: 'text',
      valid: 0,
      invalidMsg: 'Please input a name',
    },

    {
      name: 'Email',
      label: 'Email Address',
      type: 'email',
      valid: 0,
      invalidMsg: 'Please check your email',
    },
    {
      name: 'Description',
      label: 'Your question/request',
      type: 'text',
      valid: 0,
      invalidMsg: 'Please add a description of your query',
    },
  ]);

  return (
    <div className=" mt-8 w-2/3 flex flex-col h-full shadow-md m-auto">
      <CustomForm
        message="Please add your details below and we'll get in touch!"
        inputsArray={inputsArray}
        submitHandler={submitHandler}
        blur={validationHandler}
      />
    </div>
  );
};

export default Contact;
