import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "", // Tracks the search input
      filter: "All", // Tracks the dropdown selection
    };
  }

  // Update the search term in state
  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  // Update the filter type in state
  onFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  // Filter items based on both the search and dropdown filter
  filterItems = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesFilter =
      this.state.filter === "All" || item.type === this.state.filter;
    return matchesSearch && matchesFilter;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
        />

        {/* Dropdown Filter */}
        <select onChange={this.onFilterChange}>
          <option value="All">All</option>
          <option value="Fruit">Fruits</option>
          <option value="Vegetable">Vegetables</option>
        </select>

        {/* Render the List component with filtered items */}
        <List items={this.props.items.filter(this.filterItems)} />
      </div>
    );
  }
}

export default FilteredList;
