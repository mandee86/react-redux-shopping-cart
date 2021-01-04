import React from 'react';

// styles
import { StyledFilter } from './Filter.styles'

const Filter = ({ count, sort, size, sortProducts, filterProducts }) => {
  return (
    <StyledFilter className="filter">
      <div className="filter-result">
        {count} Products
      </div>
      <div className="filter-sort">
        Order {" "}
        <select
          value={sort}
          onChange={sortProducts}
        >
          <option value="">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="heighest">Heighest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{" "}
        <select
          value={size}
          onChange={filterProducts}
        >
          <option value="">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </StyledFilter>
  ) 
}

export default Filter;