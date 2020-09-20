import { createAction } from "@reduxjs/toolkit";
// import { FILTER_CONTACT } from "../constants/formConstants";

export const contactsFilter = createAction("@contacts/filter");

// export const contactsFilter = (filter) => ({
//   type: FILTER_CONTACT,
//   payload: filter,
// });
