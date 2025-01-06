import { Link } from "react-router";
const LandingPage = () => {
  return (
    <div className="homebody">
      <Link to="/magazine">
        <div className="flex flex-col gap-0 h-screen">
          <div className="mx-auto my-auto">
            <img
              className=" mx-auto md:m-auto md:w-1/2"
              src="LOGO-Large.png"
              alt="Logo"
            />
            <img
              className=" mx-auto md:m-auto  md:w-1/2"
              src="spinning-magazine.gif"
              alt="Logo"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export { LandingPage };
