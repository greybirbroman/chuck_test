const getSearchQuery = ((state => state.search.query))
const getSearchResult = ((state) => state.search.searchResult);
const getIsSearchCompleted = ((state) => state.search.isSearchCompleted)

export {
    getSearchQuery,
    getSearchResult,
    getIsSearchCompleted,
}