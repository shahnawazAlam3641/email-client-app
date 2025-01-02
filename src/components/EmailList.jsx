import { useEffect, useState } from "react";
import EmailItem from "./EmailItem";

const EmailList = ({ currentEmail, setCurrentEmail }) => {
  const [emails, setEmails] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [page1, setPage1] = useState(null);
  const [page2, setPage2] = useState(null);

  const handlePrevious = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage == 2) return;
    setCurrentPage(currentPage + 1);
  };

  const fetchEmails = async () => {
    try {
      const response = await fetch(
        "https://flipkart-email-mock.now.sh/?page=" + currentPage
      );
      const data = await response.json();
      console.log(data);

      setEmails(data?.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, [currentPage]);

  return (
    <div className="flex w-full items-center gap-5 flex-col">
      <section className="w-full  overflow-y-auto  h-screen">
        {emails.map((email) => {
          return (
            <div key={email.id} onClick={() => setCurrentEmail(email)}>
              <EmailItem email={email} />
            </div>
          );
        })}
      </section>
      <div className="flex gap-8 mb-6">
        <button
          onClick={handlePrevious}
          className={` border-2  transition-colors duration-200 text-accesntColor  font-bold border-accesntColor px-3 rounded-md ${
            currentPage == 1
              ? "opacity-35"
              : "hover:bg-accesntColor hover:text-white"
          }`}
        >
          {"<"}
        </button>
        <p className="text-accesntColor font-bold"> {currentPage}</p>
        <button
          onClick={nextPage}
          className={` border-2  transition-colors duration-200 text-accesntColor  font-bold border-accesntColor px-3 rounded-md ${
            currentPage == 2
              ? "opacity-35"
              : "hover:bg-accesntColor hover:text-white"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default EmailList;
