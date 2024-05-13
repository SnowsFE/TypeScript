import React from "react";
import Image from "next/image";
import Logo from "../Logo/Music.png";

const Nav: React.FC = () => {
  const community: string[] = [
    "음악",
    "커뮤니티",
    "마이픽",
    "모집",
    "앨범 꾸미기",
  ];

  return (
    <>
      <div className="Navbar">
        <Image src={Logo} alt="navimage" />
        {community.map((item, index) => (
          <a href="/" key={index}>
            {item}
          </a>
        ))}
        <div className="Login">
          <a href="/">로그인 / 회원가입</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
