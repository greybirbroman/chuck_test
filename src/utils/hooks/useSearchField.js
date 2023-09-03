import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setSearchSettings,
  resetSearchSettings,
  fetchSearchResult,
} from '../../services/reducers/searchSlice';

const useSearchField = () => {
  const [timeoutId, setTimeoutId] = useState(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newQuery = event.target.value;
    dispatch(setSearchSettings(newQuery));

    clearTimeout(timeoutId);

    if (newQuery.length >= 4) {
      const newTimeoutId = setTimeout(() => {
        handleSubmit(newQuery);
      }, 1000);
      setTimeoutId(newTimeoutId);
    }
  };

  const handleResetQuery = () => {
    dispatch(resetSearchSettings());
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === ' ' && event.target.selectionStart === 0) {
      event.preventDefault();
    }
  };

  const handleSubmit = (query) => {
    dispatch(fetchSearchResult(query));
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
    handleKeyPress,
  };
};

export default useSearchField;
