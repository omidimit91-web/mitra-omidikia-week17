const initialState = {
  contacts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Add Contact":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "Delete Contact":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };
    case "Save":
      return {
        contacts: state.contacts.map((contact) => {
          return contact.id === action.payload.id ? action.payload : contact;
        }),
      };
    case "Dellete Items":
      return{
        contacts: state.contacts.filter((contact)=>!action.payload.includes(contact.id))
      }  
    default:
      return state;
  }
};

export { initialState, reducer };
