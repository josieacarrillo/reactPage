//import logo from './logo.svg'; - add in my personal pic here (:
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';


function App() {
  return (
    <div className="App">
      <h1> My Awesome Blog
        <div id="page-body">
            <HomePage />
            <AboutPage />
            <ArticlesListPage />
            <ArticlePage />
         </div>
      </h1>
    </div>
  );
}

export default App;
