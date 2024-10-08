// import logo from "../assets/sy-logo_.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// const Navbar = () => {
//   return(
//      <nav className="mb-20 flex items-center justify-between py-6">
//         <div className = "flex flex-shrink-0 items-center">
//             <img className="mx-5 w-28" src={logo} alt="logo"/>

//         </div>
//         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//             <FaLinkedin/>
//             <FaGithub/>
//             <FaInstagram/>
//             <FaTwitter/>
//         </div>

//     </nav>
// );
    
  
// };

// export default Navbar;






import logo from "../assets/sy-logo_.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
//import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-28" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sneha-yadav-11a454283/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ssyy21" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sneha_2005_yadav/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
