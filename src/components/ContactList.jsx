import { useContext } from "react";
import { ContentContext } from "../context/ContextProvider";

function ContactList() {
  console.log("jshcdbg"); //دیگه نمیفهمم چرا نمیاره لیست کانتکتامو ،واقعا تلاش کردم حدود 6 ساعت سعر کردم باگشو درارم ختی از جیپیتی هم استفاده کردم اما نشد ،لطفا باگ عزیزمو بم بگید ،ممنون
  const { state } = useContext(ContentContext);

  return (
    <div>
      <h2>ContactList</h2>
      {state.contacts.map((contact) => {
        <div key={contact.phone}>
          <p>Name:{contact.name}</p>
          <p>Email:{contact.email}</p>
          <p>Phone :{contact.phone}</p>
        </div>;
      })}
    </div>
  );
}

export default ContactList;
