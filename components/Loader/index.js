import Loader from 'react-loader-spinner'
import {LoadAnimation} from './styledComponents'

const Load = () => (
  <LoadAnimation data-testid="loader">
    <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
  </LoadAnimation>
)

export default Load
