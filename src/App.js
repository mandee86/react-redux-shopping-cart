import React from 'react';
import { Provider } from 'react-redux';

// store
import store from './redux/store';

// Container
import Products from './containers/Products/Products'

// Styles
import { GlobalStyles } from './styles/GlobalStyles.styles';

const App = () => {

  return (
    <Provider store={store}>
      <GlobalStyles />

      {/* products page */}
      <Products />
    </Provider>
  );
}

export default App;
