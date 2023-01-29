import {Link} from 'react-router-dom'

import {GameCardItem, Thumbnail, GameTitle, Views} from './styledComponents'
import Context from '../../Context'

const GamingVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <Context.Consumer>
      {value => {
        const {shiftTab, isDark} = value
        const onTap = () => {
          shiftTab('NONE')
        }
        return (
          <Link
            to={`/videos/${id}`}
            style={{color: 'inherit', textDecoration: 'none'}}
            onClick={onTap}
          >
            <GameCardItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle isDark={isDark}>{title}</GameTitle>
              <Views>{viewCount} Watching Worldwide</Views>
            </GameCardItem>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default GamingVideoItem
