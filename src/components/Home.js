import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoSection = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 min-height: 290px;
 height: calc(100%-560px);

 img {
     width: 272px;
     height: 92px;
     margin-top: auto; 
 }
`;
const SearchSection = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;

`;
const Form = styled.div``;

const Search = styled.div`
 display: flex;
 align-items: center;
 padding: 0px 14px;
 background: #fff;
 border: 1px solid #dfe1e5;
 box-shadow: none;
 border-radius: 24px;
 z-index: 3;
 height: 44px;
 margin: 0 auto;
 max-width: 584px;

`;
const SearchIcon = styled.div`
 color: #9aa0ab;
 height: 30px;
 width: 30px;
 padding-right: 10px;
 display: flex;
 align-items: center;

 & svg{
     fill: #9aa0a6;
 }
`;
const SearchInput = styled.input`
 display: flex;
 flex: 1;
 height: 40px;
 background-color: transparent;
 border: none;
 margin: 0;
 padding: 0;
 color: rgba(0,0,0,0.87);
 word-wrap: break-word;
 outline: none;
 heigth: 34px;
 font-size: 16px;
`;

const MicIcon = styled.div`
 display: flex;
 cursor: pointer;
 align-items: center;
 border: 0;
 background: transparent;
 outline: none;
 padding: 0 8px;
 width: 40px;
 line-height:44px;
 height: 44px;

 svg{
     height: 24px;
     width: 24px;
     vertical-align: middle;
 }
`;
const ButtonSection = styled.div`
 display: flex;
 justify-content: center;
 height: 70px;
 padding-top: 18px;
 top: 53px;
 z-index: 0;

 button {
     background-color: #f8f9fa;
     border: 1px solid #f8f9fa;
     border-radius: 4px;
     color: #3c4043;
     font-family: Roboto,arial, sans-serif;
     font-size: 14px;
     margin:11px 4px;
     padding: 0 16px;
     line-height: 27px;
     height: 36px;
     min-width: 54px;
     text-align: center;
     cursor: pointer;
     user-select: none;

 }
`;


 
const Home = () => {
    return (
        <Container>
           <LogoSection>
             
          <img
            src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png'
            alt='google-logo'
          />
            
           </LogoSection>
           <SearchSection>
               <Form action="/" method="GET" role="search">
                   <Search>
                       <SearchIcon>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368">
                           <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                       </SearchIcon>
                       <SearchInput type="text" />
                       <MicIcon>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/>
                       <path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/>
                       <path fill="#34A853" d="M11 18.92h2V22h-2z"/><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"/>
                       <path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"/>
                       </svg>
                       </MicIcon>
                   </Search>
               </Form>
               <ButtonSection>
                   <button>Google Search</button>
                   <button>I'm Feeling Lucky</button>
               </ButtonSection>
           </SearchSection>
        </Container>
    );
};

export default Home
