import HTMLFlipBook from "react-pageflip";
import { useState } from "react";

const MagazinePage = () => {
  const [pdfSrc, setPdfSrc] = useState("pdf-download-button.png");
  return (
    <div className="magbody overflow-hidden">
      <a href="https://www.dropbox.com/scl/fi/ahaw6bxkouttuwt7hjfuh/soap_finalfinalfinal12_6.pdf?rlkey=lyq84tgcb631c6eqt1k19ju9l&st=fdysa74m&dl=1">
        <img
          src={pdfSrc}
          className="md:w-1/2 mx-auto p-8 md:p-2"
          alt="pdf download button"
          onMouseEnter={() => setPdfSrc("pdf-download-button-red.png")}
          onMouseLeave={() => setPdfSrc("pdf-download-button.png")}
        />
      </a>
      <div className="hidden pb-8 pt-4 lg:block">
        {/* @ts-expect-error flipbook package does not have a corresponding types package */}
        <HTMLFlipBook
          className="mx-auto"
          width={600}
          height={800}
          mobileScrollSupport={false}
        > 
          <div></div>
          <img className="" loading="lazy" src="magImages/cover.png" alt="" />
          {Array.from({ length: 90 }, (_, index) => (
            <img
              key={index + 1}
              src={`magImages/image_${index + 1}.png`}
              alt={``}
              loading="lazy"
            />
          ))}
          <img className="" src="magImages/backcover.png" alt="" />
          <div></div>
        </HTMLFlipBook>
      </div>
      <div className=" mx-auto lg:hidden">
        <img
          loading="lazy"
          className="mx-auto w-1/2"
          src="magImages/cover.png"
          alt=""
        />
        <div className="grid grid-cols-2">
          {Array.from({ length: 90 }, (_, index) => (
            <img
              key={index + 1}
              src={`magImages/image_${index + 1}.png`}
              alt={``}
              loading="lazy"
            />
          ))}
        </div>
        <img
          className="mx-auto w-1/2"
          src="magImages/backcover.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export { MagazinePage };
