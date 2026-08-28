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

//میدونم استایل ندارم ولی همه تمرکزم رو گذاشته بودم روکد ها و فهمیدن منطقشون ،تا الانم که تمومش کردم مبحث جدید رو هنوز نگاه نکردم ،پس همینو بپذبربد لطفا و اینکه قسمت ادیت خیلی سخت بود واسم درکش لطفا به  استاد بگید اگه امکان داره ادیت رو توضیح بدن تووبینار، ممنون از برسیتون
//راستی چون نفهمیدم چرا گفتین تایپ فون رو باید تکست بدم ،تغییرش ندادم 

export default App;
