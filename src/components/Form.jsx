import { useRef } from "react";
import { useState } from "react";

export default function Form() {
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  //   const [enteredValues, setEnteredValues] = useState({
  //     email: "",
  //     password: "",
  //   });

  function handleSubmit(event) {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;

    console.log(email, password);
  }

  // function handleSubmittedValues(identifier, value) {
  //   setEnteredValues((prevValue) => ({
  //     ...prevValue,
  //     [identifier]: value,
  //   }));
  // }

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <div className="form-element">
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          //   value={enteredValues.email}
          //   onChange={(event) => handleSubmittedValues("email", event.target.value)}
          ref={enteredEmail}
        />
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
        <button className="submit">Login</button>
      </div>
    </form>
  );
}
