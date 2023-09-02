import ErrorPage from './ErrorPage';
import { useSelector } from 'react-redux';
import { getError } from '../../services/selectors/apiErrorsSelectors';

const SingleJokeErrorPage = () => {
  const error = useSelector(getError);

  const pageData = {
    title: `${error}! An error occurred while contacting the server`,
    subtitle: `Please try again later!`,
  };

  return <ErrorPage title={pageData.title} subtitle={pageData.subtitle} />;
};

export default SingleJokeErrorPage;
