import React from "react";
import { connect } from "react-redux";
import { contactsFilter } from "../../redux/actions/filterAction";
import styleFilter from "./Filter.module.css";
import formSelectors from "../../redux/selectors/formSelectors";

const Filter = ({ value, contactsFilterChange }) => {
  return (
    <div className={styleFilter.filterWrap}>
      <h3 className={styleFilter.filterTitle}>Find by name</h3>
      <input
        type="text"
        className={styleFilter["filter_input"]}
        value={value}
        onChange={(event) => contactsFilterChange(event.target.value)}
      ></input>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: formSelectors.getFilter(state),
});

const mapDispatchToProps = {
  contactsFilterChange: contactsFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
