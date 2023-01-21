import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSortDescending} from 'react-icons/hi'
import './index.css'

import {Link} from 'react-router-dom'
import {FaGamepad} from 'react-icons/fa'

import {
  LeftBarContainer,
  RoutesContainer,
  Route,
  Info,
  Contact,
  NetworkImages,
  Image,
  Descriptions,
} from './styledComponents'

const LeftBar = () => (
  <LeftBarContainer>
    <RoutesContainer>
      <Link to="/" className="link active">
        <AiFillHome className="icons active-icon" />
        <Route>Home</Route>
      </Link>
      <Link to="/trending" className="link">
        <HiFire />
        <Route>Trending</Route>
      </Link>
      <Link to="/games" className="link">
        <FaGamepad />
        <Route>Gaming</Route>
      </Link>
      <Link to="/" className="link">
        <HiSortDescending />
        <Route>Saved videos</Route>
      </Link>
    </RoutesContainer>

    <Info>
      <Contact>Contact Us</Contact>
      <NetworkImages>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
          alt="twitter logo"
        />
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </NetworkImages>
      <Descriptions>
        Enjoy! Now to see your channels and recommendations!
      </Descriptions>
    </Info>
  </LeftBarContainer>
)

export default LeftBar
