import ErrorPage from './ErrorPage';

const NotFoundPage = () => {
  const pageData = {
    title: '404.',
    subtitle: "Oops, this page doesn't exist!",
  };
  return <ErrorPage title={pageData.title} subtitle={pageData.subtitle} />;
};

export default NotFoundPage;
