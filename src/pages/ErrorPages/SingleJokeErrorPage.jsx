import ErrorPage from './ErrorPage';

const SingleJokeErrorPage = () => {

  const pageData = {
    title: `An error occurred while contacting the server`,
    subtitle: `Please try again later!`,
  };

  return <ErrorPage title={pageData.title} subtitle={pageData.subtitle} />;
};

export default SingleJokeErrorPage;
