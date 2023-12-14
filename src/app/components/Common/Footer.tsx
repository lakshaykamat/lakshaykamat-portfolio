import { FaEnvelope ,FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { socialMediaLinks } from "../../../data";

const SocialMediaIcon = ({ link, text, jsx }) => {
  return (
    <li className="m-2 text-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <div className="">
          {jsx}
          {/* <h5>{text}</h5> */}
        </div>
      </a>
    </li>
  );
};
const socialMediaConfig = [
  {
    link: `mailto:${socialMediaLinks.mail}`,
    text: "Email",
    jsx: <FaEnvelope />,
  },
  {
    link: socialMediaLinks.github,
    text: "Github",
    jsx:<FaGithub/>,
  },
  {
    link: socialMediaLinks.linkedIn,
    text: "LinkedIn",
    jsx:<FaLinkedin/>,
  },
  {
    link: socialMediaLinks.twitter,
    text: "Twitter",
    jsx: <FaTwitter/>,
  },
];
const Footer = () => {
  return (
    <footer className="px-3 py-5 text-gray-300 border-t border-slate-800 bg-slate-800">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="flex items-center">
          <h3 className="mb-4 text-2xl font-bold md:m-0">Lakshay Kamat</h3>
        </div>
        <div className="flex items-center">
          <ul className="flex flex-wrap justify-center space-x-7">
            {socialMediaConfig.map((item,index) => {
              return <SocialMediaIcon key={index} link={item.link} text={item.text} jsx={item.jsx} />;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;