import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Main from './Layout/Main';
import ErrorPage from './Component/Error-Page/ErrorPage';
import Topic from './Component/Topic/Topic';
import Stastics from './Component/Stastics/Stastics';
import Blog from './Component/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>,
        },
        {
          path: '/topics',
          element: <Topic></Topic>
        },
        {
          path: '/stastics',
          element: <Stastics></Stastics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
