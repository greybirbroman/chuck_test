import ErrorPage from './ErrorPage';
import { useRouteError } from 'react-router-dom';

const SingleJokeErrorPage = () => {
  const error = useRouteError();

  const pageData = {
    title: `${error.status}! An error occurred while contacting the server`,
    subtitle: `Please try again later!`,
  };

  return <ErrorPage title={pageData.title} subtitle={pageData.subtitle} />;
};

export default SingleJokeErrorPage;
