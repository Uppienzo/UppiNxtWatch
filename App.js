import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Games from './components/Games'
import NotFound from './components/NotFound'
import Video from './components/Videos'
import SavedVideos from './components/SavesVideos'
import Context from './context'

class App extends Component {
  state = {
    activeBar: 'HOME',
    savedVideos: [],
    isDark: false,
  }

  changeNavBar = value => {
    this.setState({activeBar: value})
  }

  changeTheme = () => {
    this.setState(PrevState => ({isDark: !PrevState.isDark}))
  }

  saveVideo = video => {
    const {savedVideos} = this.state
    const noOfVideos = savedVideos.filter(each => each.id === video.id)

    const isVideoExist = noOfVideos.length > 0

    if (isVideoExist) {
      const updatedVideos = savedVideos.filter(each => each.id !== video.id)
      this.setState({savedVideos: updatedVideos})
    } else {
      const updatedVideos = [...savedVideos, video]
      this.setState({savedVideos: updatedVideos})
    }
  }

  render() {
    const {activeBar, savedVideos, isDark} = this.state
    return (
      <Context.Provider
        value={{
          activeBar,
          shiftTab: this.changeNavBar,
          saveVideo: this.saveVideo,
          savedVideos,
          isDark,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/games" component={Games} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
