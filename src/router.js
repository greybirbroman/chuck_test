import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  Layout,
  MainPage,
  SingleJokePage,
  NotFoundPage,
  SingleJokeErrorPage,
  RandomJokePage,
} from './pages';

import { jokeLoader } from './pages/SingleJokePage/SingleJokePage';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route
        path='jokes/:id'
        element={<SingleJokePage />}
        loader={jokeLoader}
        errorElement={<SingleJokeErrorPage />}
      />
      <Route path='random-joke' element={<RandomJokePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
