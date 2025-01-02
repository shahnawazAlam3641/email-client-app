import { useEffect, useState } from "react";
import EmailItem from "./EmailItem";
import "../App.css";
import { useContext } from "react";
import emailsPageDataContext from "../context/emailsPageDataContext";

const EmailList = () => {
  const {
    emailPageData,
    setEmailPageData,
    setCurrentEmail,
    currentFilter,
    currentPage,
    setCurrentPage,
  } = useContext(emailsPageDataContext);

  const [filteredEmails, setFilteredEmails] = useState();

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

      data.list.map((item, index) => {
        data.list[index].favorite = false;
        data.list[index].read = false;
      });

      setEmailPageData((prev) => ({
        ...prev,
        [`page${currentPage}`]: data?.list || [],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentFilter == "Unread") {
      const filteredData = emailPageData[`page${currentPage}`].filter(
        (email) => {
          return email.read == false;
        }
      );
      setFilteredEmails(filteredData);
    }

    if (currentFilter == "Read") {
      const filteredData1 = emailPageData.page1.filter((email) => {
        return email.read == true;
      });

      const filteredData2 = emailPageData.page2.filter((email) => {
        return email.read == true;
      });

      const allPageRead = [...filteredData1, ...filteredData2];

      setFilteredEmails(allPageRead);
    }

    if (currentFilter == "Favourites") {
      const filteredData1 = emailPageData.page1.filter((email) => {
        return email.favourite == true;
      });

      const filteredData2 = emailPageData.page2.filter((email) => {
        return email.favourite == true;
      });

      const allPageFavourites = [...filteredData1, ...filteredData2];

      setFilteredEmails(allPageFavourites);
    }
  }, [currentFilter, emailPageData, currentPage]);

  useEffect(() => {
    if (
      !emailPageData[`page${currentPage}`] ||
      emailPageData[`page${currentPage}`].length < 1
    ) {
      fetchEmails();
    }
  }, [currentPage]);

  return (
    <div className="flex w-full items-center gap-5 flex-col mt-6">
      {filteredEmails && filteredEmails.length < 1 && (
        <h1 className="text-center text-textColor font-bold text-xl ">
          No Emails Found
        </h1>
      )}

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
      {currentFilter == "Unread" && (
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
      )}
    </div>
  );
};

export default EmailList;
