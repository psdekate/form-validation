import { useRef } from "react";
import { useState } from "react";

export default function Form() {
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  //   const [enteredValues, setEnteredValues] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const [didEdit, setDidEdit] = useState({
  //     email: false,
  //     password: false,
  //   });

  function handleSubmit(event) {
    event.preventDefault();
    const email = enteredEmail.current.value;
    // const password = enteredPassword.current.value;

    const invalidEmail = !email.includes("@");

    if (invalidEmail) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log("Sending HTTP");
  }

  //   function handleSubmittedValues(identifier, value) {
  //     setEnteredValues((prevValue) => ({
  //       ...prevValue,
  //       [identifier]: value,
  //     }));
  //     setDidEdit((prevValue) => ({
  //       ...prevValue,
  //       [identifier]: false,
  //     }));
  //   }

  //   function handleEditState(identifier) {
  //     setDidEdit((prevValue) => ({
  //       ...prevValue,
  //       [identifier]: true,
  //     }));
  //     console.log(didEdit);
  //   }

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <div className="form-element">
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          //   value={enteredValues.email}
          //   onBlur={() => handleEditState("email")}
          //   onChange={(event) => handleSubmittedValues("email", event.target.value)}
          ref={enteredEmail}
        />
        {emailIsInvalid && <p>Enter a valid email</p>}
      </div>
      <div className="form-element">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          //   value={enteredValues.password}
          //   onChange={(event) => handleSubmittedValues("password", event.target.value)}
          ref={enteredPassword}
        />
      </div>
      <div className="buttons">
        <button className="submit">Submit</button>
        <button className="submit" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
