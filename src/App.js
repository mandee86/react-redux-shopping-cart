import React from 'react';

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
          Feature 1 uj <br />
          Product List
        </main>
        <footer>
          All right is reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
