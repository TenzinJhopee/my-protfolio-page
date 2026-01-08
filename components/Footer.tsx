import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div
        className="
          max-w-6xl mx-auto
          px-6
          py-14
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        "
      >
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white">
            Tenzin Chabdeltsang
          </h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
            Software Developer & Data Scientist focused on building intelligent,
            scalable systems and data-driven solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-300 mb-4">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#achievements" className="hover:text-blue-600">Achievements</a></li>
            <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-300 mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2 hover:text-blue-600">
              <FaEnvelope /> 
              <a href="mailto:tenzinchabdeltsang@gmail.com">tenzinchabdeltsang@gmail.com</a>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600">
              <FaPhone /> 
              <a href="tel:+41 788758599">+41 788758599</a>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600">
              <FaLinkedin /> 
              <a
                href="https://www.linkedin.com/in/tenzin-chabdeltsang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600">
              <FaGithub /> 
              <a
                href="https://github.com/TenzinJhopee"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
           
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Tenzin Chabdeltsang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
