import { useEffect, useState } from "react";
import "./App.css";
import { GetContacts } from "./services/GetContacts";
import { ContactCard } from "./components/Card/Card";
import { ContactNavbar } from "./components/Navbar/Navbar";

function App() {
  const [contacts, setContacts] = useState([]);
  const [view, setView] = useState("List View");

  useEffect(() => {
    GetContacts().then((data) => setContacts([...data]));
  }, []);

  return (
    <>
      <ContactNavbar view={view} setView={setView} />
      <section className={`${view === 'Grid View' ? 'list-view' : 'grid-view'}`}>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} user={contact} />
        ))}
      </section>
    </>
  );
}

export default App;
