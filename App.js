import {Switch, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import LeftBar from './components/LeftBar'
import MainBar from './components/MainBar'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Games from './components/Games'
import NotFound from './components/NotFound'
import Video from './components/Videos'

import {HomeContainer, HomeBody} from './styledComponents'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <HomeContainer data-testid="home">
      <Navbar />
      <HomeBody>
        <LeftBar />
        <Switch>
          <ProtectedRoute exact path="/" component={MainBar} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/games" component={Games} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <Route component={NotFound} />
        </Switch>
      </HomeBody>
    </HomeContainer>
  </Switch>
)

export default App
