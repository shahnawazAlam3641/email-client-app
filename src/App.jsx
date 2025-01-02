import { createContext, useState } from "react";
import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";
import FilterNav from "./components/FilterNav";
import emailsPageDataContext from "./context/emailsPageDataContext";

// const emailDataContext = createContext();
function App() {
  const [currentEmail, setCurrentEmail] = useState(null);

  const [emailPageData, setEmailPageData] = useState({ page1: [], page2: [] });

  return (
    <>
      <emailsPageDataContext.Provider
        value={{ emailPageData, setEmailPageData }}
      >
        <main className="m-5 ">
          <FilterNav />
          <section className="flex gap-6 w-full">
            <EmailList
              setCurrentEmail={setCurrentEmail}
              currentEmail={currentEmail}
            />

            {currentEmail && (
              <EmailBody
                setCurrentEmail={setCurrentEmail}
                currentEmail={currentEmail}
              />
            )}
          </section>
        </main>
      </emailsPageDataContext.Provider>
    </>
  );
}

export default App;
