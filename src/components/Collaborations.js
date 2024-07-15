import googleLogo from "../images/google.png";
import microsoftLogo from "../images/microsoft.png";
import ibmLogo from "../images/ibm.png";
import adobeLogo from "../images/adobe.png";
import amazonLogo from "../images/amazon.png";
import codeIcon from "../images/code-icon.png";

const Collaborations = () => (
  <section className="py-16 bg-[#fdf0e4]" style={{padding: "4rem"}}>
    <div className="container mx-auto bg-[#ECF8DF] rounded-lg p-8 flex flex-col lg:flex-row items-center shadow-lg">
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex items-start lg:items-center">
        <img src={codeIcon} alt="Code Icon" className="w-16 h-16 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Our Collaborations
          </h2>
          <p className="text-gray-700">
            We've partnered with industry leaders to deliver courses that not
            only educate but also immerse you in real-world scenarios, fostering
            your career growth.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 grid grid-cols-3 gap-4">
        <img src={googleLogo} alt="Google" className="w-24 h-auto" />
        <img src={microsoftLogo} alt="Microsoft" className="w-24 h-auto" />
        <img src={ibmLogo} alt="IBM" className="w-24 h-auto" />
        <img src={adobeLogo} alt="Adobe" className="w-24 h-auto" />
        <img src={amazonLogo} alt="Amazon" className="w-24 h-auto" />
      </div>
    </div>
  </section>
);

export default Collaborations;
