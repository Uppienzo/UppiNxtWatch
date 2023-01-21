import styled from 'styled-components'

export const VideosContainer = styled.div`
  height: 90vh;
  overflow: auto;
  padding: 20px;
  width: 100%;
  background-color: #f8fafc;
  font-family: roboto;
`
export const LoadAnimation = styled.div`
  color: #3b82f6;
  text-align: center;
  margin-top: 120px;
`

export const NoVideosContainer = styled.div`
  font-family: roboto;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoVideosImage = styled.img`
  height: 300px;
`
export const NoVideosHeader = styled.h1`
  color: black;
  font-size: 22px;
`
export const NoVideosDescription = styled.p`
  font-size: 17px;
  color: #7e858e;
  margin: 0px;
  text-align: center;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 7px 18px;
  border-radius: 3px;
  border-width: 0px;
  margin-top: 15px;
  cursor: pointer;
`
