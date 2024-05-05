import './App.css';
import React, { useState } from 'react'
import News   from './components/News';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

const App = () => {
 
  const apiKey = process.env.REACT_APP_NEWS_MONKEY_API_KEY;
  
  const [progress, setProgress] = useState(0);
 
    return (
      <Router>
        <LoadingBar color={'red'} progress={progress} />
        <NavBar />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey}  setProgress={setProgress}  key="general" category="general" />}></Route>
          <Route exact path='/business' element={<News apiKey={apiKey}  setProgress={setProgress}  key="business" category="business" />}></Route>
          <Route exact path='/entertainment' element={<News apiKey={apiKey}  setProgress={setProgress}  key="entertainment" category="entertainment" />}></Route>
          <Route exact path='/general' element={<News apiKey={apiKey}  setProgress={setProgress}  key="general2" category="general" />}></Route>
          <Route exact path='/health' element={<News apiKey={apiKey}  setProgress={setProgress}  key="health" category="health" />}></Route>
          <Route exact path='/science' element={<News apiKey={apiKey}  setProgress={setProgress}  key="science" category="science" />}></Route>
          <Route exact path='/sports' element={<News apiKey={apiKey}  setProgress={setProgress}  key="sports" category="sports" />}></Route>
          <Route exact path='/technology' element={<News apiKey={apiKey}  setProgress={setProgress}  key="technology" category="technology" />}></Route>
        </Routes>
      </Router>

    )
}
export default App;

