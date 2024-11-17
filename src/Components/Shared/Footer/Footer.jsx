"use client";
import Image from "next/image";
import logo from "../../../../Public/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={"bg-gray-200  "}>
      <footer className="footer p-16 ">
        <aside className={"col-span-2"}>
          <p>
            <Image src={logo} alt={"logo"} width={140} height={50}></Image>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <p className="">Web Application Development</p>
          <p className="">Mobile Application Development</p>
          <p className="">UI/UX Design</p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href={"/about"} className="link link-hover">
            About us
          </Link>
          <Link href={"/contact"} className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav className={""}>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
