import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setSearchQuery,
  resetSearchQuery,
  setSearchResult,
  setSearchError,
} from '../../services/actions/searchActions';
import { setLoading } from '../../services/actions/loadingActions';
import { resetPaginationSettings } from '../../services/actions/paginationActions';
import { setSearchCompleted } from '../../services/actions/searchActions';
import { getJokesByQuery } from '../../utils/api';

const useSearchField = () => {
  const [timeoutId, setTimeoutId] = useState(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newQuery = event.target.value;
      dispatch(setSearchQuery(newQuery));

    clearTimeout(timeoutId);

    if (newQuery.length >= 4) {
      const newTimeoutId = setTimeout(() => {
        handleSubmit(newQuery);
      }, 1000);
      setTimeoutId(newTimeoutId);
    }
  };

  const handleResetQuery = () => {
    dispatch(resetSearchQuery());
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === ' ' && event.target.selectionStart === 0) {
      event.preventDefault();
    }
  };

  const handleSubmit = async (query) => {
    try {
      dispatch(setLoading(true));
      const response = await getJokesByQuery(query);
      const jokes = response.result;
      dispatch(setSearchResult(jokes));
      dispatch(resetPaginationSettings());
    } catch (error) {
      dispatch(setSearchError(error));
    } finally {
      dispatch(setLoading(false));
      setSearchCompleted(true)
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return {
    inputRef,
    handleChange,
    handleResetQuery,
    handleKeyPress
  };
};

export default useSearchField;
