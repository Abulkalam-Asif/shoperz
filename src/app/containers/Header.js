import React from "react";
import businessBagIcon from "../assets/headerIcons/businessBag.svg";
import currencyIcon from "../assets/headerIcons/currency.svg";
import helpIcon from "../assets/headerIcons/help.svg";
import loginIcon from "../assets/headerIcons/login.svg";
import ticketIcon from "../assets/headerIcons/ticket.svg";
import userIcon from "../assets/headerIcons/user.svg";
import shoperzLogo from "../assets/shoperz.svg";
import { HeaderButton, HeaderLink } from "../components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="my-4">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-12">
            <HeaderLink href={"#"} text={"Contact Us"} icon={userIcon} />
            <HeaderLink href={"#"} text={"Help Center"} icon={helpIcon} />
            <HeaderLink
              href={"#"}
              text={"Business Conditions"}
              icon={businessBagIcon}
            />
            <HeaderLink href={"#"} text={"Terms of Personal Data Protection"} />
          </div>
          <div className="flex gap-x-12">
            <HeaderButton text={"Currency"} icon={currencyIcon} />
            <HeaderLink href="#" text={"Sell on Shoperz"} icon={ticketIcon} />
            <HeaderButton text={"Login"} icon={loginIcon} />
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="max-w-8xl mx-auto flex items-center gap-x-4 px-4">
        <a href="/">
          <Image src={shoperzLogo} alt="Shoperz logo" />
        </a>
        <button className="flex gap-x-2 items-center">
          <span className="whitespace-nowrap">Select Categories</span>
          <FontAwesomeIcon icon={faCaretDown} width={12} />
        </button>
        <div className="flex items-center justify-center bg-zinc-100 rounded-lg px-3 gap-x-3 w-full">
          <input
            type="email"
            className="w-full py-2.5 bg-transparent text-sm"
            placeholder="What are you looking for?"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} width={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
