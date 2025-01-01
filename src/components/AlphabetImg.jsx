const AlphabetImg = ({ name }) => {
  const imgAlphabet = name.split("")[0].toUpperCase();
  return (
    <div className="bg-accesntColor min-w-12 h-12 flex justify-center items-center text-white font-semibold text-2xl rounded-full">
      {imgAlphabet}
    </div>
  );
};

export default AlphabetImg;
