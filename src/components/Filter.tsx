import * as React from "react";

const Filter = props => {
  return (
    <div>
      <form onChange={props.onFilterChange}>
        <input
          type="radio"
          defaultChecked
          id="All"
          name="category"
          value="All"
          className="mr-1"
        />
        <label htmlFor="All">All</label>
        <input
          type="radio"
          id="Men"
          name="category"
          value="Men"
          className="ml-2 mr-1"
        />
        <label htmlFor="Men">Men</label>
        <input
          type="radio"
          id="Women"
          name="category"
          value="Women"
          className="ml-2 mr-1"
        />
        <label htmlFor="Women">Women</label>
        <input
          type="radio"
          id="Youth"
          name="category"
          value="Youth"
          className="ml-2 mr-1"
        />
        <label htmlFor="Youth">Youth</label>
      </form>
    </div>
  );
};

export default Filter;
