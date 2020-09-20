import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import formAction from "../actions/formAction";
import { contactsFilter } from "../actions/filterAction";


const addItem = (state, { payload }) => {
  return [...state, payload];
};
const removeItem = (state, { payload }) => {
  return state.filter((item) => item.id !== payload);
};

const items = createReducer([], {
  [formAction.fetchContactsSuccess]: (state, action) => action.payload,
  [formAction.addContactSuccess]: addItem,
  [formAction.removeContactSuccess]: removeItem, 
});

const filter = createReducer("", {
  [contactsFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [formAction.fetchContactsRequest]: () => true,
  [formAction.fetchContactsSuccess]: () => false,
  [formAction.fetchContactsError]: () => false,
  [formAction.addContactRequest]: () => true,
  [formAction.addContactSuccess]: () => false,
  [formAction.addContactError]: () => false,
  [formAction.removeContactRequest]: () => true,
  [formAction.removeContactSuccess]: () => false,
  [formAction.removeContactError]: () => false
});

// const error = createReducer(null, )

export default combineReducers({
  items,
  filter,
  loading,
  // error
});
