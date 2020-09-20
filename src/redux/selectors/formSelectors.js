import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getItems = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getItemById = createSelector([getItems, (_, itemId) => itemId], (items, itemId) => {
  return items.find((item) => item.id === itemId);
});

const getChoosenItems = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getLoading,
  getItems,
  getItemById,
  getFilter,
  getChoosenItems,
};
