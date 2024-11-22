import React, { memo } from "react";
// import logo from "../assets/logo.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Scrolltop from "./ScrollTop";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Footer = memo(() => {
  return (
    <footer className="w-full bg-blue-800 py-12 px-4 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pl-4 sm:pl-0">
        {/* Logo and Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 object-contain"
            alt="Logo"
            // src={logo}
            loading="lazy"
          />
          <p className="text-sm">
            <span className="font-semibold">Email:</span> info@sankhyana.com
          </p>
          <p className="text-sm">
            <a
              href="https://www.aicvsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-semibold">Website:</span> www.aicvsolution.com
            </a>
          </p>
        </div>

        {/* Career Hunters */}
        <div>
          <h3 className="text-lg font-medium underline mb-4">Career Hunters</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Create a resume", to: "resume" },
              { label: "Templates", to: "resumetemplate" },
              { label: "Cover Letter Templates", to: "coverletter" },
              { label: "Resume Examples", to: "resumetemplate" },
              { label: "Compare Resumes", to: "resumetemplate" },
            ].map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:underline cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-lg font-medium underline mb-4">Career</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Resume", to: "resume" },
              { label: "Interview Q&A", to: "interview" },
              { label: "Cover Letter", to: "coverletter" },
              { label: "Blog", to: "blog" },
              { label: "Pricing", to: "pricing" },
            ].map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:underline cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-lg font-medium underline mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About Us", to: "about-us" },
              { label: "FAQs", to: "faqs" },
              { label: "Contact Us", to: "/contactus", external: false },
              { label: "Privacy Policy", to: "/Privacypolicy", external: false },
              {
                label: "Terms of Service",
                to: "/Termsandconditions",
                external: false,
              },
            ].map((item, index) => (
              <li key={index}>
                {item.external === false ? (
                  <Link to={item.to} className="hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:underline cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Address Section */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-center md:text-left">
        {[
          { location: "Kenya", address: "View Park Towers, Floor 6, Nairobi, Kenya" },
          {
            location: "Bihar, India",
            address: "Amber Hotel, Dehri-On-Sone, Near Station Road. (821305)",
          },
          {
            location: "India",
            address: "#1678, HDFC ATM, Kammanahalli, Bengaluru (560084).",
          },
          {
            location: "India",
            address: "#1188, HNR Tower, HSR Layout, Bengaluru (560102).",
          },
        ].map((place, index) => (
          <div key={index}>
            <p className="font-semibold">{place.location}</p>
            <p>{place.address}</p>
          </div>
        ))}
      </div>

      {/* Social Media and Product Info */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {[
            { icon: FaFacebookF, href: "https://www.facebook.com/SankhyanaKenya/" },
            { icon: FaInstagram, href: "https://www.instagram.com/sankhyanakenya/" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/showcase/78795866/" },
            { icon: FaTwitter, href: "https://x.com/SankhyanaK" },
            { icon: FaWhatsapp, href: "https://whatsapp.com/channel/0029VaG9xJJ5K3zNNr0xgj0E" },
            { icon: FaYoutube, href: "https://youtube.com/@sankhyanaconsultancy" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
              aria-label={social.icon.name}
            >
              <social.icon />
            </a>
          ))}
        </div>
        {/* Product Info */}
        <div className="text-xs text-center md:text-right">
          <p>Product by Sankhyana</p>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-500 pt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sankhyana.com"
          className="text-xs text-center block hover:underline"
        >
          © 2024 Sankhyana Consultancy Services. All rights reserved.
        </a>
      </div>

      {/* Scroll to Top */}
      <Scrolltop />
    </footer>
  );
});