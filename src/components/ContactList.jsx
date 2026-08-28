import { useContext, useState } from "react";
import { ContentContext } from "../context/ContextProvider";
import EditContact from "./EditContact";

function ContactList() {
  const { state, dispatch } = useContext(ContentContext);
  const [edit, setEdit] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
  });
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <h2>ContactList</h2>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "Dellete Items", payload: selected });
          setSelected([]);
        }}
      >
        Dellete Items
      </button>
      {state.contacts
        .filter((contact) => {
          return (
            contact.name.toLowerCase().includes(search.toLowerCase()) ||
            contact.email.toLowerCase().includes(search.toLowerCase()) ||
            contact.phone.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((contact) => {
          return (
            <div key={contact.phone}>
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelected([...selected, contact.id]);
                  } else {
                    selected.filter((id) => id !== contact.id);
                  }
                }}
              />
              <p>Name:{contact.name}</p>
              <p>Email:{contact.email}</p>
              <p>Phone :{contact.phone}</p>
              <button
                onClick={() =>
                  dispatch({ type: "Delete Contact", payload: contact.id })
                }
              >
                Delete Contact
              </button>
              <button
                onClick={() =>
                  setEdit({
                    id: contact.id,
                    name: contact.name,
                    email: contact.email,
                    phone: contact.phone,
                  })
                }
              >
                Edit
              </button>
              {edit.id && (
                <EditContact
                  edit={edit}
                  setEdit={setEdit}
                  dispatch={dispatch}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default ContactList;
