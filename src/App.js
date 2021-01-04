import React from 'react';

// Container
import Products from './containers/Products/Products'

// Styles
import { GlobalStyles } from './styles/GlobalStyles.styles';

const App = () => {

  return (
    <>
      <GlobalStyles />

      {/* products page */}
      <Products />
    </>
  );
}

export default App;
