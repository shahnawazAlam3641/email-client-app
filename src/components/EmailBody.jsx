import { useEffect, useState } from "react";
import AlphabetImg from "./AlphabetImg";
import useDateTimeStamp from "../hooks/useDateTimeStamp";

const EmailBody = ({ currentEmail, setCurrentEmail }) => {
  const [emailBody, setEmailBody] = useState();

  console.log(currentEmail);

  // console.log(currentEmail?.id);

  const fetchEmailBody = async () => {
    try {
      const response = await fetch(
        "https://flipkart-email-mock.now.sh/?id=" + currentEmail?.id
      );
      const data = await response.json();
      setEmailBody(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
        <button className="bg-accesntColor hover:bg-transparent border-2 transition-colors duration-200 hover:text-textColor hover:border-accesntColor w-fit h-fit py-1 px-3 rounded-full text-white text-semibold">
          Mark as Favourite
        </button>
      </header>

      <section
        dangerouslySetInnerHTML={{
          __html: emailBody?.body.replace(/<\/p>/g, "</p> <br/>"),
        }}
        className="mx-16"
      />
    </div>
  );
};

export default EmailBody;
