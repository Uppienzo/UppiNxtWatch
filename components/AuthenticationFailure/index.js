import {
  FailureVideosContainer,
  FailureVideoImage,
  FailureVideoHeader,
  FailureVideoDescription,
  FailureRetryButton,
} from './styledComponents'

import Context from '../../Context'

const FailureView = props => {
  const {retry} = props
  const onRetry = () => {
    retry()
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDark} = value

        const image = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureVideosContainer>
            <FailureVideoImage src={image} alt="failure view" />
            <FailureVideoHeader isDark={isDark}>
              Oops! Something Went Wrong
            </FailureVideoHeader>
            <FailureVideoDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureVideoDescription>
            <FailureRetryButton type="button" onClick={onRetry}>
              Retry
            </FailureRetryButton>
          </FailureVideosContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default FailureView
