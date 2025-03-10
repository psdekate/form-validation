import { useRef } from "react";
import { useState } from "react";

export default function Form() {
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

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

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <div className="form-element">
        <label htmlFor="email">email</label>
        <input type="text" name="email" ref={enteredEmail} />
        {emailIsInvalid && <p>Enter a valid email</p>}
      </div>
      <div className="form-element">
        <label htmlFor="password">password</label>
        <input type="password" name="password" ref={enteredPassword} />
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
