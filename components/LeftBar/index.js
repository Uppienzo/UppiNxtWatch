import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSortDescending} from 'react-icons/hi'

import './index.css'

import {Link} from 'react-router-dom'
import {FaGamepad} from 'react-icons/fa'
import Context from '../../Context'

import {
  LeftBarContainer,
  RoutesContainer,
  Tab,
  Route,
  Info,
  Contact,
  Icon,
  NetworkImages,
  Image,
  Descriptions,
} from './styledComponents'

const ConstTabs = [
  {
    id: 'HOME',
    icon: <AiFillHome />,
    route: '/',
    text: 'Home',
  },
  {
    id: 'TRENDING',
    icon: <HiFire />,
    route: '/trending',
    text: 'Trending',
  },
  {
    id: 'GAMES',
    icon: <FaGamepad />,
    route: '/gaming',
    text: 'Gaming',
  },
  {
    id: 'SAVED',
    icon: <HiSortDescending />,
    route: '/saved-videos',
    text: 'Saved videos',
  },
]

const LeftBar = () => (
  <Context.Consumer>
    {value => {
      const {activeBar, shiftTab, isDark} = value
      const onChangeNavBAr = event => {
        shiftTab(event.currentTarget.value)
      }
      return (
        <LeftBarContainer isDark={isDark}>
          <RoutesContainer>
            {ConstTabs.map(each => {
              const activeTab = activeBar === each.id
              const activeIconClass = activeBar === each.id ? 'active-icon' : ''
              const activeText = activeBar === each.id ? 'active-text' : ''

              return (
                <Link to={each.route} className="link" key={each.id}>
                  <Tab
                    type="button"
                    key={each.id}
                    value={each.id}
                    activeTab={activeTab}
                    onClick={onChangeNavBAr}
                    isDark={isDark}
                  >
                    <Icon className={activeIconClass}>{each.icon}</Icon>
                    <Route className={activeText}>{each.text}</Route>
                  </Tab>
                </Link>
              )
            })}
          </RoutesContainer>

          <Info isDark={isDark}>
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
    }}
  </Context.Consumer>
)

export default LeftBar
