import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './component/Topics/Topics';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Quizs from './component/Topic/Quizs/Quizs';
import Home from './component/Home/Home';
import Homes from './component/Homes/Homes';
function App() {
  // Create Browser Router  
  const router = createBrowserRouter([
    // Create Router in use link
    
     {
        path : '/',
        element : <Main></Main>,
        children : [
          {
            path : '/',
            // Load Main Topics Api
            loader : async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
            },

            element : <Home></Home>
          },
          {
            path : '/home',
            loader : async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
             },
            element : <Homes></Homes>
          },
          {
            path : '/topics',
            loader : async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element : <Topics></Topics>,
          },
          {
            path : '*',
            element : 'The page is not Found'
          },
          {
            path : '/quizs/:quizId',
            loader : async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
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
