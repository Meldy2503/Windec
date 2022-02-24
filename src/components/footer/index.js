import React from 'react';
import { LeftContent, RightContent, CopyRight } from "./Styled";
import { MainContainer, ContentContainer } from "../reusableComponents/ContainerStyled";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';





function Footer() {
  return (
  <MainContainer bgco= "#1C1E53">
      <ContentContainer 
      pb="0"
      pt="7rem"
      position= "relative">
          <LeftContent>
              <div>
                   <h1>
                      Windec
                   </h1>
                   <p>
                      We are always open to discuss your project and improve your online presence.
                   </p>
              </div>

              <span>
                  <div>
                      <h6>Email me at</h6>
                      <p>contact@website.com</p>
                  </div>
                  <div>
                      <h6>Call us</h6>
                      <p>08037588098</p>
                  </div>
              </span>
          </LeftContent>

          <RightContent>
              <h1>
                 Lets Talk!
              </h1>
              <p>
              We are always open to discuss your projects, improve your online presence and help with your web design challenges.
              </p>
              <span>
                  <FaFacebook className='icons'/>
                  <FaTwitter className='icons'/>
                  <FaInstagram className='icons'/>
                  <FaLinkedin className='icons'/>
              </span> 
              <CopyRight>Copyright 2022, Windec.com </CopyRight>
          </RightContent>
      </ContentContainer>
  </MainContainer>
  )
}

export default Footer;

