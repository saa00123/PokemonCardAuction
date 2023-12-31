import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import firebase from "../../Firebase/firebase";
import Color from "./Color";
import HeaderLogo from "./HeaderLogo";
import Search from "./Search";

const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  border-bottom: solid 6px ${Color({ color: "Red" })};
  @media (min-width: 1024px) and (max-width: 1440px) {
    height: 4.813rem;
  }
`;

const HeaderSpaceDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding-left: 1rem;
  }
`;

const HeaderMenuContainer = styled.div`
  width: 37.5rem;
  height: 6.25rem;
  display: flex;
  margin-left: auto;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 31.252rem;
    height: 4.813rem;
    font-size: 1.125rem;
  }
`;

const HeaderMenu = styled.button`
  justify-content: center;
  align-items: center;
  width: 9.375rem;
  height: 6.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  background-color: ${Color({ color: "Default" })};
  border: none;

  &:hover {
    background-color: ${Color({ color: "Red" })};
    color: ${Color({ color: "Default" })};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 7.813rem;
    height: 4.813rem;
    font-size: 1.125rem;
  }
`;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const uid = JSON.parse(sessionStorage.getItem("uid"));
  console.log("uid : ", uid);
  // useEffect(() => {
  //   console.log("header uid", uid);
  //   const state = JSON.parse(sessionStorage.getItem("uid"));
  //   if (state === null) setIsLoggedIn(false);
  //   else setIsLoggedIn(true);
  // }, [isLoggedIn]);

  const navigate = useNavigate();

  const checkUid = () => {
    if (uid !== null) return true;
    return false;
  };

  const navigateCardRegistration = () => {
    if (uid !== null) navigate("/CardRegistration");
    else {
      alert("로그인이 필요한 페이지 입니다.");
      navigate("/Login");
    }
  };

  const navigatFinishAuction = () => {
    navigate("/FinishAuction");
  };

  const navigateMyPage = () => {
    navigate("/MyPage");
  };

  const navigateLogin = () => {
    navigate("/Login");
  };

  const onClickLogout = async () => {
    try {
      console.log("로그아웃 누름");
      if (!window.confirm("로그아웃 하시겠습니까?")) {
        console.log("로그아웃 안함");
      } else {
        alert("로그아웃 되었습니다.");
        sessionStorage.removeItem("uid");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("nickname");
        navigate("/");
        // setIsLoggedIn(false);
        await firebase.auth().signOut();
      }
    } catch (error) {
      console.error("Logout error : ", error);
    }
  };

  return (
    <HeaderContainer>
      <HeaderSpaceDiv>
        <HeaderLogo />
        <Search />
        <HeaderMenuContainer>
          <HeaderMenu onClick={navigateCardRegistration}>카드 등록</HeaderMenu>
          <HeaderMenu onClick={navigatFinishAuction}>마감된 경매</HeaderMenu>
          <HeaderMenu onClick={navigateMyPage}>마이 페이지</HeaderMenu>
          {uid ? (
            <HeaderMenu onClick={onClickLogout}>로그아웃</HeaderMenu>
          ) : (
            <HeaderMenu onClick={navigateLogin}>로그인</HeaderMenu>
          )}
        </HeaderMenuContainer>
      </HeaderSpaceDiv>
    </HeaderContainer>
  );
};

export default Header;
