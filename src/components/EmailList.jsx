import { useEffect, useState } from "react";
import EmailItem from "./EmailItem";

const EmailList = ({ currentEmail, setCurrentEmail }) => {
  const [emails, setEmails] = useState([]);

  const { currentPage, setCurrentPage } = useState();
  const [page1, setPage1] = useState(null);
  const [page2, setPage2] = useState(null);

  const fetchEmails = async () => {
    try {
      const response = await fetch(
        "https://flipkart-email-mock.now.sh/?page=1"
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
  }, []);
  return (
    <section className="w-full">
      {emails.map((email) => {
        return (
          <div key={email.id} onClick={() => setCurrentEmail(email)}>
            <EmailItem email={email} />
          </div>
        );
      })}
    </section>
  );
};

export default EmailList;
