const getSearchQuery = ((state => state.search.query))
const getSearchResult = ((state) => state.search.searchResult);
const getIsSearchCompleted = ((state) => state.search.isSearchCompleted)
const getIsLoading = ((state) => state.search.fetchLoading)

export {
    getSearchQuery,
    getSearchResult,
    getIsSearchCompleted,
    getIsLoading
}