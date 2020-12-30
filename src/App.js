import React, { useState } from 'react';
import data from './data/data.json'

// Components
import Products from './containers/Products/Products'

// Styles
import { GlobalStyles } from './styles/GlobalStyles.styles';

const App = () => {

  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

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
              <Products products={products} />
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
