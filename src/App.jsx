import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <ContactForm />
      <ContactList />
    </ContextProvider>
  );
}

export default App;
