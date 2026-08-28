import { useState, useContext } from "react";
import { ContentContext } from "../context/ContextProvider";
function ContactForm() {
  const { dispatch } = useContext(ContentContext);
  const [contact, setcontact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcontact((contact) => ({ ...contact, [name]: value }));
  };
  const submitHandler = () => {
    if (contact.name.trim().length < 6) {
      setError("لطفا نام و نام خانوادگی معتبر وارد کنید");
      return;
    }
    if (!contact.email.includes("@")) {
      setError("ایمیل معتبر وارد کنید");
      return;
    }
    dispatch({
      type: "Add Contact",
      payload: {...contact, id:Math.floor(Math.random()*10000)}
    });
    setcontact({
    name: "",
    email: "",
    phone: "",
  });
    setError("");
  };
  return (
    <form >
      <input
        type="text"
        placeholder ="نام و نام خانوادگی"
        name="name"
        value={contact.name}
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder ="ایمیل"
        name="email"
        value={contact.email}
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder ="شماره همراه"
        name="phone"
        value={contact.phone}
        onChange={changeHandler}
      />
      {error && <p>{error}</p>}
      <button type="button" onClick={submitHandler}>
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
