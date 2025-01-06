const MagazinePage = () => {
  return (
    <div className="magbody">
      <div className="mx-auto md:w-1/2">
        <img className="mx-auto w-1/2" src="magImages/1png.png" alt="opener" />
        {Array.from({ length: 45 }, (_, index) => (
          <img
            key={index + 2}
            src={`magImages/${index + 2}png.png`}
            alt={`page ${index + 2}`}
          />
        ))}
        <img className="mx-auto w-1/2" src="magImages/47png.png" alt="finisher" />
      </div>
    </div>
  );
};

export { MagazinePage };
