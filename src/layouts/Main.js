import React from 'react';

// styles
import { StyledContainer } from './Main.styles'

// components
import Header from './Header';
import Footer from './Footer';

const Main = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      <main className="main">
        { children }
      </main>
      <Footer />
    </StyledContainer>
  ) 
}

Main.Content = (props) => <div className="content">{props.children}</div>;
Main.SideBar = (props) => <div className="sidebar">{props.children}</div>;

export default Main;