import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("@contacts/addRequest");
const addContactSuccess = createAction("@contacts/addSuccess");
const addContactError = createAction("@contacts/addError");

const removeContactRequest = createAction("@contacts/removeRequest");
const removeContactSuccess = createAction("@contacts/removeSuccess");
const removeContactError = createAction("@contacts/removeError");

const fetchContactsRequest = createAction("@contacts/fetchRequest");
const fetchContactsSuccess = createAction("@contacts/fetchSuccess");
const fetchContactsError = createAction("@contacts/fetchError");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError
};

export const removeContact = createAction("@contacts/remove");
