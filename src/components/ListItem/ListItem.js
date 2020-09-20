import React from "react";
import { connect } from "react-redux";
import formOperations from "../../redux/operations/formOperations";
import styleList from "./ListItem.module.css";
import formSelectors from "../../redux/selectors/formSelectors";

const ListItem = ({ onRemoveContact, name, number }) => {  
  return (
    <li className={styleList["list_item"]}>
      <p className={styleList["list_item-name"]}>{name}: </p>
      <p className={styleList["list_item-number"]}> {number}</p>
      <button
        onClick={onRemoveContact}
        className={styleList["list_item-button"]}
      >
        &times;
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownId) => {
  const item = formSelectors.getItemById(state, ownId.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownId) => ({
  onRemoveContact: () => dispatch(formOperations.removeContact(ownId.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
