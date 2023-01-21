import {Link} from 'react-router-dom'

import {GameCardItem, Thumbnail, GameTitle, Views} from './styledComponents'

const GamingVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <Link
      to={`/videos/${id}`}
      style={{color: 'inherit', textDecoration: 'none'}}
    >
      <GameCardItem>
        <Thumbnail src={thumbnailUrl} alt="games" />
        <GameTitle>{title}</GameTitle>
        <Views>{viewCount} Watching Worldwide</Views>
      </GameCardItem>
    </Link>
  )
}

export default GamingVideoItem
