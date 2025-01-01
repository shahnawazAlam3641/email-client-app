import { useState } from "react";
import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";
import FilterNav from "./components/FilterNav";

function App() {
  const [currentEmail, setCurrentEmail] = useState(null);

  return (
    <>
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
    </>
  );
}

export default App;
