const getCurrentPage = ((state) => state.pagination.currentPage);
const getItemsOnPage = ((state) => state.pagination.itemsOnPage);

export {
    getCurrentPage,
    getItemsOnPage
}