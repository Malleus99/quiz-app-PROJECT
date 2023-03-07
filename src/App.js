import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import AppMap from './pages/AppMap';
import MainPage from 'pages/MainPage';
import ErrorPage from 'pages/ErrorPage';
import Quiz from 'components/quiz/Quiz';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppMap />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />} />
      <Route path='/:quizId' element={<Quiz />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
