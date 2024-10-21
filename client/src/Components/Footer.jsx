import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 lg:px-44 py-3">
      <Link to="/">
        <img width={150} src={assets.logo} alt="" />
      </Link>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @BgRemover | All right reserved
      </p>
      <div className="flex gap-2 cursor-pointer">
        <Link to="https://www.facebook.com/" target="_blank">
          <img src={assets.facebook_icon} alt="" />
        </Link>
        <Link to="https://x.com/home?lang=en-in" target="_blank">
          <img src={assets.twitter_icon} alt="" />
        </Link>
        <Link to="https://www.google.co.in/" target="_blank">
          <img src={assets.google_plus_icon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
