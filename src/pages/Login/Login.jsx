import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";
import BackgroundImage from "../../components/ImageComponents/BackgroundImage";

function Login() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray2 = Color({ color: "Gray2" });

  return (
    <>
      <BackgroundImage />
      <Div
        className="LoginContainer"
        display="flex"
        flexdirection="column"
        justifycontent="start"
        alignitems="center"
        padding="14.125rem 0 0 0"
        width="100vw"
        notebookpadding="10rem 0 0 0"
      >
        <Logo />
        <Div
          className="LoginInputContainer"
          display="flex"
          justifycontent="center"
          margin="5.813rem 0 0 0"
          width="37.625rem"
          height="10.188rem"
          notebookmargin="2.465rem 0 0 0"
          notebookwidth="31.188rem"
          notebookheight="8.813rem"
        >
          <Div className="IdPasswordContainer" display="flex" flexdirection="column" margin="0 0.75rem 0 0">
            <Div className="IdContainer" display="flex" margin="0 0 0.688rem 0">
              <Div
                className="Id"
                display="flex"
                alignitems="center"
                width="8.75rem"
                height="3.75rem"
                textalign="left"
                fontSize="1.625rem"
                notebookwidth="6.25rem"
                notebookheight="3.125rem"
                notebookfontSize="1.25rem"
              >
                아이디
              </Div>
              <Input
                placeholder="Put your id"
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderradius="15px"
                notebookwidth="18.75rem"
                notebookheight="3.125rem"
                notebookfontSize="1rem"
              />
            </Div>
            <Div className="PasswordContainer" display="flex">
              <Div
                className="Password"
                display="flex"
                alignitems="center"
                width="8.75rem"
                height="3.75rem"
                textalign="left"
                fontSize="1.625rem"
                notebookwidth="6.25rem"
                notebookheight="3.125rem"
                notebookfontSize="1.25rem"
              >
                비밀번호
              </Div>
              <Div
                display="flex"
                flexdirection="column"
                width="21.875rem"
                height="5.625rem"
                notebookwidth="18.75rem"
                notebookheight="5rem"
              >
                <Input
                  placeholder="Put your password"
                  padding="0 0 0 1.313rem"
                  width="21.875rem"
                  height="3.75rem"
                  fontSize="1.625rem"
                  borderradius="15px"
                  notebookwidth="18.75rem"
                  notebookheight="3.125rem"
                  notebookfontSize="1rem"
                />
                <Div
                  className="SignAndFindContainer"
                  display="flex"
                  justifycontent="space-between"
                  width="21.438rem"
                  height="1.875rem"
                  notebookwidth="18.75rem"
                  notebookheight="1.875rem"
                >
                  <Button
                    className="SignUpBtn"
                    color={Gray2}
                    backgroundcolor="transparent"
                    border="none"
                    fontSize="1rem"
                    hoverbackgroundcolor="none"
                    hovercolor="none"
                    hoverborder="none"
                    hoverbordercolor="none"
                    onClick={() => navigate("/SignUp")}
                    notebookcolor={Gray2}
                    notebookbackgroundcolor="transparent"
                    notebookborder="none"
                    notebookfontSize="0.875rem"
                    notebookhoverbackgroundcolor="none"
                    notebookhovercolor="none"
                    notebookhoverborder="none"
                    notebookhoverbordercolor="none"
                  >
                    회원가입
                  </Button>
                  <Button
                    className="SignUpBtn"
                    type="submit"
                    color={Gray2}
                    backgroundcolor="transparent"
                    border="none"
                    fontSize="1rem"
                    hoverbackgroundcolor="none"
                    hovercolor="none"
                    hoverborder="none"
                    hoverbordercolor="none"
                    onClick={() => navigate("/FindIdPassword")}
                    notebookcolor={Gray2}
                    notebookbackgroundcolor="transparent"
                    notebookborder="none"
                    notebookfontSize="0.875rem"
                    notebookhoverbackgroundcolor="none"
                    notebookhovercolor="none"
                    notebookhoverborder="none"
                    notebookhoverbordercolor="none"
                  >
                    아이디/비밀번호 찾기
                  </Button>
                </Div>
              </Div>
            </Div>
          </Div>
          <Button
            className="LoginBtn"
            width="6.25rem"
            height="8.313rem"
            fontSize="1.25rem"
            fontWeight="bold"
            borderradius="1rem"
            border="none"
            notebookwidth="5.313rem"
            notebookheight="6.938rem"
            notebookfontSize="1rem"
          >
            로그인
          </Button>
        </Div>
      </Div>
    </>
  );
}

export default Login;
