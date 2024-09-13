export const selectCampers = (state) => state.campers.items;

export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectTotal = (state) => state.campers.totalItems;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectItemsPerPage = (state) => state.campers.itemsPerPage;

export const selectCamperById = (state, id) => {
  return state.campers.items.find((camper) => camper.id === id);
};
