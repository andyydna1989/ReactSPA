import {screen, render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomForm from './customForm';

describe ('Custom Form tests', () => {
  const formProps = {
    inputsArray: [
      {
        name: 'Name',
        label: 'Name',
        type: 'text',
        valid: 0,
        invalidMsg: 'Please input a name',
      },
    ],
    message: 'message test',
    blur: (validationHandler = (value, input) => {
      switch (input) {
        case 'Name':
          if (value.length > 0) {
            return true;
          } else {
            return false;
          }
          break;
        case 'Email':
          if (value.includes ('@') && value.includes ('.')) {
            return true;
          } else {
            return false;
          }
          break;
        case 'Description':
          if (value.length > 0) {
            return true;
          } else {
            return false;
          }
          break;
        default:
          return false;
      }
    }),
    submitHandler: (submitHandler = valuesArray => {
      //This would usually be send to the backend with the Fetch API, but there is no need for it on this demo site.
      // if you've not seen it already, there is a simple Fetch implementation on the Home page, and a basic Express server in the
      //Backend folder.
      console.log (valuesArray);
    }),
  };

  beforeEach (() => {
    render (<CustomForm {...formProps} />);
  });

  test ('form renders an input field', () => {
    //Arrange
    const inputField = screen.getByText ('Name');

    //Assert
    expect (inputField).toBeInTheDocument ();
  });

  test ('invalid data changes the label text', () => {
    //Arrange
    const inputField = screen.getByTestId ('inputBox');

    //Act
    fireEvent.blur (inputField);

    expect (screen.getByText (/please/i)).toBeInTheDocument ();
  });

  test ('Button does not permit submission without valid data', () => {
    expect (screen.getByText (/submission/i)).toBeInTheDocument ();
  });
});
