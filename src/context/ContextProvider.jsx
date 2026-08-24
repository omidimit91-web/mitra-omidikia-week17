import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
const ContentContext = createContext();
function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContentContext.Provider value={{ state, dispatch }}>
      {children}
    </ContentContext.Provider>
  );
}
export { ContentContext, ContextProvider };
