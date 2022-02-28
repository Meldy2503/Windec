import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { MenuOptions, CardContainer, Cards } from "./templateStyled";
import data from "./Data";
import { CgArrowLongRight } from "react-icons/cg";

function Templates() {
  return (
        <MainContainer bgco="#fff">
            <ContentContainer flexd="column">
              <MenuOptions>
                  <li><a href="#">All</a></li>
                  <li><a href="#">UI Design</a></li>
                  <li><a href="#">Webflow Design</a></li>
                  <li><a href="#">Figma Design</a></li>
              </MenuOptions> 

             <CardContainer>
                     {data.map((items) => {
                         return (
                    <Cards>
                        <div key={items.id}>
                            <img src={items.img} alt="image" />
                            <h3>{items.title}</h3>
                            <p>{items.text}</p>
                            <li>
                                 <a href="#">{items.link}</a>
                                 <CgArrowLongRight />
                            </li> 
                        </div>
                    </Cards>
                         )
                     })} 
             </CardContainer>
          </ContentContainer> 
        </MainContainer>
  );
}

export default Templates;




