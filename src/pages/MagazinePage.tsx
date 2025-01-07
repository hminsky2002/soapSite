import HTMLFlipBook from "react-pageflip";

const MagazinePage = () => {
  return (
    <div className="magbody">
      <div className="hidden pt-8 md:block">
        {/* @ts-ignore */}
        <HTMLFlipBook className="mx-auto" width={600} height={800}>
          <p></p>
          <img className="" loading="lazy" src="magImages/cover.png" alt="opener" />
          {Array.from({ length: 90 }, (_, index) => (
            <img
              key={index + 1}
              src={`magImages/image_${index + 1}.png`}
              alt={`page ${index + 1}`}
              loading="lazy"
            />
          ))}
          <img className="" src="magImages/backcover.png" alt="finisher" />
          <p></p>
        </HTMLFlipBook>
      </div>
      <div className=" mx-auto md:hidden">
        <img loading="lazy" className="mx-auto w-1/2" src="magImages/cover.png" alt="opener" />
        <div className="grid grid-cols-2">
          {Array.from({ length: 90 }, (_, index) => (
            <img
              key={index + 1}
              src={`magImages/image_${index + 1}.png`}
              alt={`page ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
        <img
          className="mx-auto w-1/2"
          src="magImages/backcover.png"
          alt="finisher"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export { MagazinePage };
