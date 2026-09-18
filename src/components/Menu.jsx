import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { CiMail } from "react-icons/ci";
function Menu() {
  return (
    <div id="social-menu" className="flex flex-col gap-1">
      <a
        href="https://github.com/AllisonMarquesSouza/dictionary-app"
        target="_blank"
        className="flex items-center gap-1 p-3 rounded-md text-slate-50 bg-slate-900 hover:cursor-pointer transition hover:bg-slate-600"
      >
        <DiGithubBadge className="text-3xl text-white hover:text-purple-300 hover:cursor-pointer transition " />
        <span>Code</span>
      </a>
      <a
        href="https://www.linkedin.com/in/allison--marques/"
        target="_blank"
        className="flex items-center gap-1 p-3 rounded-md text-slate-50 bg-slate-900 hover:cursor-pointer transition hover:bg-slate-600"
      >
        <FaLinkedin className="text-2xl text-white hover:text-purple-300  hover:cursor-pointer transition " />
        <span>Linkedin</span>
      </a>
      <a
        href="mailto:allisonmarques@outlook.com.br"
        target="_blank"
        className="flex items-center gap-1 p-3 rounded-md text-slate-50 bg-slate-900 hover:cursor-pointer transition hover:bg-slate-600"
      >
        <CiMail className="text-2xl text-white hover:text-purple-300 hover:cursor-pointer transition " />
        <span>Email</span>
      </a>
    </div>
  );
}

export default Menu;
