import { useContext, useEffect, useState } from "react";
import AlphabetImg from "./AlphabetImg";
import useDateTimeStamp from "../hooks/useDateTimeStamp";
import emailsPageDataContext from "../context/emailsPageDataContext";

const EmailBody = () => {
  const [emailBody, setEmailBody] = useState();

  const {
    emailPageData,
    setEmailPageData,
    currentEmail,
    setCurrentEmail,
    currentPage,
  } = useContext(emailsPageDataContext);

  const fetchEmailBody = async () => {
    try {
      const response = await fetch(
        "https://flipkart-email-mock.now.sh/?id=" + currentEmail?.id
      );
      const data = await response.json();
      setEmailBody(data);

      setEmailPageData((prev) => {
        return {
          ...prev,
          [`page${currentPage}`]: prev[`page${currentPage}`].map((email) => {
            if (email.id === currentEmail.id) {
              return { ...email, read: true };
            } else {
              return email;
            }
          }),
        };
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFavourite = (e, id) => {
    emailPageData.page1.map((email) => {
      if (email.id == id) {
        setEmailPageData((prev) => {
          return {
            ...prev,
            page1: prev.page1.map((email) => {
              if (email.id === currentEmail.id) {
                setCurrentEmail((prev) => {
                  return { ...prev, favourite: !prev.favourite };
                });

                return { ...email, favourite: !email.favourite };
              } else {
                return email;
              }
            }),
          };
        });
      }
    });

    emailPageData.page2.map((email) => {
      if (email.id == id) {
        setEmailPageData((prev) => {
          return {
            ...prev,
            page2: prev.page2.map((email) => {
              if (email.id === currentEmail.id) {
                setCurrentEmail((prev) => {
                  return { ...prev, favourite: !prev.favourite };
                });
                return { ...email, favourite: !email.favourite };
              } else {
                return email;
              }
            }),
          };
        });
      }
    });
  };

  useEffect(() => {
    fetchEmailBody();
  }, [currentEmail]);

  return (
    <div className="mt-6 w-[150%] p-6 border flex flex-col gap-10 border-borderColor bg-white rounded-lg h-fit">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <AlphabetImg name={currentEmail?.from?.name} />
          <div>
            <p className="text-textColor text-2xl font-semibold">
              {" "}
              {currentEmail?.subject}{" "}
            </p>
            <p className="text-textColor font-normal">
              {" "}
              {useDateTimeStamp(currentEmail?.date)}{" "}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => handleFavourite(e, currentEmail.id)}
          className="bg-accesntColor hover:bg-transparent border-2 transition-colors duration-200 hover:text-textColor hover:border-accesntColor w-fit h-fit py-1 px-3 rounded-full text-white text-semibold"
        >
          {currentEmail.favourite
            ? "Remove from Favourites"
            : "Mark as Favourite"}
        </button>
      </header>

      <section
        dangerouslySetInnerHTML={{
          __html: emailBody?.body.replace(/<\/p>/g, "</p> <br/>"),
        }}
        className="mx-16 text-textColor text-sm"
      />
    </div>
  );
};

export default EmailBody;
