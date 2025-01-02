import useDateTimeStamp from "../hooks/useDateTimeStamp";
import AlphabetImg from "./AlphabetImg";

const EmailItem = ({ email }) => {
  const { date, short_description, subject, from } = email;

  //   const imgAlphabet = from?.name.split("")[0].toUpperCase();

  const dateString = useDateTimeStamp(date);

  return (
    <div className="flex  gap-5 px-5 border border-borderColor  py-4 rounded-lg hover:cursor-pointer ">
      <AlphabetImg name={from.name} />
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-textColor">
            From: <span className="font-semibold">{from?.email}</span>
          </p>
          <p className="text-textColor">
            Subject:{" "}
            <span className="font-semibold text-textColor">{subject}</span>
          </p>
        </div>
        <p className="text-textColor">{short_description} </p>
        <div className="flex gap-5">
          <p className="text-textColor">{dateString} </p>
          <p className="text-accesntColor font-medium">Favourite</p>
        </div>
      </div>
    </div>
  );
};

export default EmailItem;
