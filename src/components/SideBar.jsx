import {
  BarChart2,
  FileText,
  BookOpen,
  Award,
  User,
  CreditCard,
  LogOut,
  Menu,
  School,
  Layers,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Sidebar items
const SIDEBAR_ITEMS = [
  { name: "Home", icon: BarChart2, color: "#6366f1", href: "/dashboard" },
  {
    name: "Template Library",
    icon: Layers,
    color: "#F59E0B",
    href: "/templatelibrary",
  },
  {
    name: "Your Documents",
    icon: FileText,
    color: "#EC4899",
    href: "/Documents",
  },
  { name: "Payment", icon: CreditCard, color: "#6366f1", href: "/payment" },
  { name: "Profile", icon: User, color: "#6EE7B7", href: "/Profile" },
  {
    name: "Knowledge Base",
    icon: BarChart2,
    color: "#6EE7B7",
    href: "/Knowledge",
  },
  { name: "Logout", icon: LogOut, color: "#EC4899", href: "/logout" },
  // { name: "Create Document", icon: LogOut, color: "#EC4899", href: "/createdoc" },
];

// External Links for Dropdown
const EXTERNAL_LINKS = [
  {
    name: "E-learning",
    icon: BookOpen,
    color: "#F59E0B",
    href: "https://www.sankedu.com/",
    external: true,
  },
  {
    name: "Scholarships",
    icon: Award,
    color: "#6366f1",
    href: "https://www.sankhyana.com/training",
    external: true,
  },
  {
    name: "Study In India",
    icon: School,
    color: "#EC4899",
    href: "https://www.sankedu.com/counseling-form-for-study-ii/",
    external: true,
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(false); // Close the sidebar on link click
    }
  };

  const handleResize = () => {
    setIsSidebarOpen(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <motion.div
                className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
                    isSidebarOpen ? "min-w-full sm:min-w-fit" : "w-0 sm:w-64"
                }`}
                animate={{ width: isSidebarOpen ? 256 : 0 }}
            > */}
      <motion.div
        className={`relative z-10 transition-all duration-100 ease-in-out flex-shrink-0 ${
          isSidebarOpen ?"w-64" : "w-0"
        } overflow-y-auto max-h-screen`}
        animate={{
          width: isSidebarOpen ? 256 : 0
          ,transition:{duration:0.1}
        }}
      >
        {isSidebarOpen && (
          <div className="h-full bg-blue-900 backdrop-blur-md p-8 flex flex-col border-r border-gray-700 fixed">
            <nav className="mt-12 flex-grow">
              {SIDEBAR_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;

                if (item.name === "Logout") {
                  return (
                    <div
                      key={item.href}
                      onClick={() => {
                        handleLogout();
                        handleLinkClick(); // Close sidebar on logout
                      }}
                      className={`flex items-center p-4 text-md font-medium rounded-lg mb-2 cursor-pointer transition-colors ${
                        isActive
                          ? "bg-blue-700 text-white"
                          : "hover:bg-blue-800 text-gray-300"
                      }`}
                    >
                      <item.icon
                        size={20}
                        style={{ color: item.color, minWidth: "20px" }}
                      />
                      <AnimatePresence>
                        {isSidebarOpen && (
                          <motion.span
                            className="ml-4 whitespace-nowrap"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleLinkClick}
                  >
                    <motion.div
                      className={`flex items-center p-4 text-md font-medium rounded-lg mb-2 transition-colors ${
                        isActive
                          ? "bg-blue-700 text-white"
                          : "hover:bg-blue-800 text-gray-300"
                      }`}
                    >
                      <item.icon
                        size={20}
                        style={{ color: item.color, minWidth: "20px" }}
                      />
                      <AnimatePresence>
                        {isSidebarOpen && (
                          <motion.span
                            className="ml-4 whitespace-nowrap"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                );
              })}

              {/* Dropdown for External Links */}
              <div>
                <motion.div
                  className={`flex items-center p-4 text-md font-medium rounded-lg mb-2 cursor-pointer transition-colors ${
                    isDropdownOpen
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-800 text-gray-300"
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <BookOpen
                    size={20}
                    style={{ color: "#F59E0B", minWidth: "20px" }}
                  />
                  <motion.span className="ml-4">Other Services</motion.span>
                  <ChevronDown className="ml-auto" size={20} />
                </motion.div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-6"
                    >
                      {EXTERNAL_LINKS.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-2 text-sm text-gray-300 hover:bg-blue-800 rounded-md transition-colors"
                          onClick={handleLinkClick}
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </div>
        )}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-3 sm:left-3 left-0 p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors z-20"
      >
        <Menu size={24} />
      </motion.button>
    </>
  );

  // return (
  //     <>
  //         {/* Sidebar Background Overlay */}
  //         <AnimatePresence>
  //             {isSidebarOpen && (
  //                 <motion.div
  //                     initial={{ opacity: 0 }}
  //                     animate={{ opacity: 0.8 }}
  //                     exit={{ opacity: 0 }}
  //                     transition={{ duration: 0.3 }}
  //                     className="fixed inset-0 z-10 bg-blue-900"
  //                     style={{ pointerEvents: isSidebarOpen ? "auto" : "none" }}
  //                 />
  //             )}
  //         </AnimatePresence>

  //         {/* Sidebar Container */}
  //         <motion.div
  //             className={`relative z-20 transition-all duration-300 ease-in-out flex-shrink-0 ${
  //                 isSidebarOpen ? "min-w-full sm:min-w-fit" : "w-0 sm:w-64"
  //             } overflow-y-auto max-h-screen`}
  //             animate={{ width: isSidebarOpen ? 256 : 0 }}
  //         >
  //             {isSidebarOpen && (
  //                 <div className="h-full bg-blue-900 backdrop-blur-md p-8 flex flex-col border-r border-gray-700 fixed">
  //                     <nav className="mt-12 flex-grow">
  //                         {SIDEBAR_ITEMS.map((item) => {
  //                             const isActive = location.pathname === item.href;

  //                             if (item.name === "Logout") {
  //                                 return (
  //                                     <div
  //                                         key={item.href}
  //                                         onClick={() => {
  //                                             handleLogout();
  //                                             handleLinkClick(); // Close sidebar on logout
  //                                         }}
  //                                         className={`flex items-center p-4 text-md font-medium rounded-lg mb-2 cursor-pointer transition-colors ${
  //                                             isActive
  //                                                 ? "bg-blue-700 text-white"
  //                                                 : "hover:bg-blue-800 text-gray-300"
  //                                         }`}
  //                                     >
  //                                         <item.icon
  //                                             size={20}
  //                                             style={{ color: item.color, minWidth: "20px" }}
  //                                         />
  //                                         <AnimatePresence>
  //                                             {isSidebarOpen && (
  //                                                 <motion.span
  //                                                     className="ml-4 whitespace-nowrap"
  //                                                     initial={{ opacity: 0, width: 0 }}
  //                                                     animate={{ opacity: 1, width: "auto" }}
  //                                                     exit={{ opacity: 0, width: 0 }}
  //                                                     transition={{ duration: 0.2, delay: 0.3 }}
  //                                                 >
  //                                                     {item.name}
  //                                                 </motion.span>
  //                                             )}
  //                                         </AnimatePresence>
  //                                     </div>
  //                                 );
  //                             }

  //                             return (
  //                                 <Link key={item.href} to={item.href} onClick={handleLinkClick}>
  //                                     <motion.div
  //                                         className={`flex items-center p-4 text-md font-medium rounded-lg mb-2 transition-colors ${
  //                                             isActive
  //                                                 ? "bg-blue-700 text-white"
  //                                                 : "hover:bg-blue-800 text-gray-300"
  //                                         }`}
  //                                     >
  //                                         <item.icon
  //                                             size={20}
  //                                             style={{ color: item.color, minWidth: "20px" }}
  //                                         />
  //                                         <AnimatePresence>
  //                                             {isSidebarOpen && (
  //                                                 <motion.span
  //                                                     className="ml-4 whitespace-nowrap"
  //                                                     initial={{ opacity: 0, width: 0 }}
  //                                                     animate={{ opacity: 1, width: "auto" }}
  //                                                     exit={{ opacity: 0, width: 0 }}
  //                                                     transition={{ duration: 0.2, delay: 0.3 }}
  //                                                 >
  //                                                     {item.name}
  //                                                 </motion.span>
  //                                             )}
  //                                         </AnimatePresence>
  //                                     </motion.div>
  //                                 </Link>
  //                             );
  //                         })}
  //                     </nav>
  //                 </div>
  //             )}
  //         </motion.div>

  //         {/* Toggle Button */}
  //         <motion.button
  //             whileHover={{ scale: 1.1 }}
  //             whileTap={{ scale: 0.9 }}
  //             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  //             className="fixed top-3 sm:left-3 left-0 p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors z-30"
  //         >
  //             <Menu size={24} />
  //         </motion.button>
  //     </>
  // );

  // return (
  //     <>
  //         {/* Background Overlay */}
  //         <motion.div
  //             className="fixed inset-0 bg-blue-900 z-10"
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: isSidebarOpen ? 0.8 : 0 }}
  //             transition={{ duration: 0.3, ease: "easeInOut" }}
  //             style={{ pointerEvents: isSidebarOpen ? "auto" : "none" }}
  //         />

  //         {/* Sidebar Container */}
  //         <motion.div
  //             className="fixed z-20 bg-blue-900 backdrop-blur-md h-full border-r border-gray-700 overflow-y-auto"
  //             initial={{ width: 0 }}
  //             animate={{ width: isSidebarOpen ? 256 : 0 }}
  //             transition={{ duration: 0.3, ease: "easeInOut" }}
  //         >
  //             {isSidebarOpen && (
  //                 <div className="p-8 flex flex-col">
  //                     <nav className="mt-12 flex-grow">
  //                         {SIDEBAR_ITEMS.map((item) => (
  //                             <Link key={item.href} to={item.href}>
  //                                 <div
  //                                     className={`flex items-center p-4 text-md font-medium rounded-lg mb-2 transition-colors ${
  //                                         location.pathname === item.href
  //                                             ? "bg-blue-700 text-white"
  //                                             : "hover:bg-blue-800 text-gray-300"
  //                                     }`}
  //                                 >
  //                                     <item.icon
  //                                         size={20}
  //                                         style={{ color: item.color, minWidth: "20px" }}
  //                                     />
  //                                     <span className="ml-4 whitespace-nowrap">{item.name}</span>
  //                                 </div>
  //                             </Link>
  //                         ))}
  //                     </nav>
  //                 </div>
  //             )}
  //         </motion.div>

  //         {/* Toggle Button */}
  //         <motion.button
  //             whileHover={{ scale: 1.1 }}
  //             whileTap={{ scale: 0.9 }}
  //             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  //             className="fixed top-3 sm:left-3 left-0 p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors z-30"
  //         >
  //             <Menu size={24} />
  //         </motion.button>
  //     </>
  // );
};

export default Sidebar;
