import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './component/Topics/Topics';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Quizs from './component/Quizs/Quizs';

function App() {
  // Create Browser Router  
  const router = createBrowserRouter([
    // Create Router in use link
     {
        path : '/',
        element : <Main></Main>,
        children : [
        
          {
            path : '/topics',
            // Load Main Topics Api
            loader : async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element : <Topics></Topics>
          },
          {
            path : '/quizs/:quizId',
            loader : async ({params}) =>{
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            element : <Quizs></Quizs>
          },
          // Add statistics component
          {
            path : '/statistics',
            element : <Statistics></Statistics>
          },
          {
            path : '/blog',
            element : <Blog></Blog>
          }
        ]
     }
  ])
  return (
    <div className="App">
      {/* RouterProvider setup */}
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
