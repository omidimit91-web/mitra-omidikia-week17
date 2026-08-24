const initialState = {
  contacts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Add Contact":
      return { ...state, contacts: [...state.contacts, action.payload] };
    default:
      return state;
  }
};

export { initialState, reducer };
