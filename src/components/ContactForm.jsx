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
    console.log("first");
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
      payload: contact,
    });
    setcontact({
    name: "",
    email: "",
    phone: "",
  });
    setError("");
  };
  return (
    <form action="">
      <input
        type="text"
        palaceholder="نام و نام خانوادگی"
        name="name"
        value={contact.name}
        onChange={changeHandler}
      />
      <input
        type="email"
        palaceholder="ایمیل"
        name="email"
        value={contact.email}
        onChange={changeHandler}
      />
      <input
        type="number"
        palaceholder="شماره همراه"
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
