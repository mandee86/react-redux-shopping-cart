import React from 'react';

// Container
import Products from './containers/Products/Products'

// Styles
import { GlobalStyles } from './styles/GlobalStyles.styles';

const App = () => {

  return (
    <>
      <GlobalStyles />

      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Products />
            </div>
            <div className="sidebar">
              Cart Items
            </div>
          </div>
        </main>

        <footer>
          All right is reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
