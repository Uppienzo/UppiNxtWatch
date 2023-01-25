import {
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeader,
  NoVideosDescription,
  RetryButton,
} from './styledComponents'

import Context from '../../context'

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
          <NoVideosContainer>
            <NoVideosImage src={image} alt="failure view" />
            <NoVideosHeader isDark={isDark}>
              Oops! Something Went Wrong
            </NoVideosHeader>
            <NoVideosDescription>
              We are having some trouble to complete your request. Please try
              again.
            </NoVideosDescription>
            <RetryButton type="button" onClick={onRetry}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default FailureView
