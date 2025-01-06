import { useState } from "react";
import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";
import FilterNav from "./components/FilterNav";
import emailsPageDataContext from "./context/emailsPageDataContext";

function App() {
  const [currentEmail, setCurrentEmail] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [emailPageData, setEmailPageData] = useState({ page1: [], page2: [] });
  const [currentFilter, setCurrentFilter] = useState("All Emails");

  return (
    <>
      <emailsPageDataContext.Provider
        value={{
          emailPageData,
          setEmailPageData,
          currentEmail,
          setCurrentEmail,
          currentPage,
          setCurrentPage,
          currentFilter,
          setCurrentFilter,
        }}
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
