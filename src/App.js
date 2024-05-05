import './App.css';
import React, { Component } from 'react'
import News   from './components/News';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
 
  apiKey = process.env.REACT_APP_NEWS_MONKEY_API_KEY;
  
  state = { progress: 0 }

  setProgress = ( progress ) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <Router>
        <LoadingBar color={'red'} progress={this.state.progress} />
        <NavBar />
        <Routes>
          <Route exact path='/' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="general" category="general" />}></Route>
          <Route exact path='/business' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="business" category="business" />}></Route>
          <Route exact path='/entertainment' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="entertainment" category="entertainment" />}></Route>
          <Route exact path='/general' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="general2" category="general" />}></Route>
          <Route exact path='/health' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="health" category="health" />}></Route>
          <Route exact path='/science' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="science" category="science" />}></Route>
          <Route exact path='/sports' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="sports" category="sports" />}></Route>
          <Route exact path='/technology' element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="technology" category="technology" />}></Route>
        </Routes>
      </Router>

    )
  }
}

