import { useEffect, useState } from "react";
import EmailItem from "./EmailItem";
import "../App.css";
import { useContext } from "react";
import emailsPageDataContext from "../context/emailsPageDataContext";

const EmailList = () => {
  const {
    emailPageData,
    setEmailPageData,
    currentEmail,
    setCurrentEmail,
    currentFilter,
    currentPage,
    setCurrentPage,
  } = useContext(emailsPageDataContext);

  const [filteredEmails, setFilteredEmails] = useState();
  // console.log(emailPageData);

  // const [emails, setEmails] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [page1, setPage1] = useState(null);
  // const [page2, setPage2] = useState(null);

  const handlePrevious = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage == 2) return;
    setCurrentPage(currentPage + 1);
  };

  const fetchEmails = async () => {
    try {
      const response = await fetch(
        "https://flipkart-email-mock.now.sh/?page=" + currentPage
      );
      const data = await response.json();
      // console.log(data);

      // setEmails(data?.list);

      data.list.map((item, index) => {
        data.list[index].favorite = false;
        data.list[index].read = false;
      });

      setEmailPageData((prev) => ({
        ...prev,
        [`page${currentPage}`]: data?.list || [],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentFilter == "Unread") {
      console.log(emailPageData);
      const filteredData = emailPageData[`page${currentPage}`].filter(
        (email) => {
          return email.read == false;
        }
      );
      setFilteredEmails(filteredData);
      console.log(filteredData);
    }

    if (currentFilter == "Read") {
      const filteredData = emailPageData[`page${currentPage}`].filter(
        (email) => {
          return email.read == true;
        }
      );
      setFilteredEmails(filteredData);
      console.log(filteredData);
    }

    if (currentFilter == "Favourites") {
      const filteredData = emailPageData[`page${currentPage}`].filter(
        (email) => {
          return email.favourite == true;
        }
      );
      setFilteredEmails(filteredData);
      console.log(filteredData);
    }
  }, [currentFilter, emailPageData]);

  useEffect(() => {
    if (
      !emailPageData[`page${currentPage}`] ||
      emailPageData[`page${currentPage}`].length < 1
    ) {
      console.log(" api");
      fetchEmails();
    } else {
      // setEmails(emailPageData[`page${currentPage}`]);
    }
  }, [currentPage]);

  return (
    <div className="flex w-full items-center gap-5 flex-col mt-6">
      {filteredEmails && (
        <section className="w-full flex flex-col gap-6 overflow-y-auto  h-screen">
          {filteredEmails.map((email) => {
            return (
              <div key={email.id} onClick={() => setCurrentEmail(email)}>
                <EmailItem email={email} />
              </div>
            );
          })}
        </section>
      )}
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
          onClick={handleNextPage}
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
