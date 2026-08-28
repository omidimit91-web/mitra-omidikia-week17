function EditContact({ edit, setEdit, dispatch }) {
  return (
    <div>
      <input
        name="name"
        value={edit.name}
        onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
      />
      <input
        name="email"
        value={edit.email}
        onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
      />
      <input
        name="phone"
        value={edit.phone}
        onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
      />
      <button
        onClick={() => {
          dispatch({ type: "Save", payload: edit });
          setEdit({ id: "", name: "", email: "", phone: "" });
        }}
      >
        Save
      </button>
      <button
        onClick={() => setEdit({ id: "", name: "", email: "", phone: "" })}
      >
        Cancle
      </button>
    </div>
  );
}

export default EditContact;
