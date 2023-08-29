import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout, MainPage, SingleJokePage, NotFoundPage } from './pages';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path='random-joke' element={<SingleJokePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
