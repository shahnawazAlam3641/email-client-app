const TextShimmer = ({ totalLines }) => {
  return (
    <div className="gap-2 flex flex-col w-full">
      {Array.from({ length: totalLines }, (e, index) => (
        <div
          key={index}
          className="h-3 min-w-full bg-gray-400 animate-pulse rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default TextShimmer;
