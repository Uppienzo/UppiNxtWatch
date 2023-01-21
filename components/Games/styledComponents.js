import styled from 'styled-components'

export const TrendsContainer = styled.div`
  height: 90vh;
  overflow: auto;
  width: 100%;
  background-color: #f8fafc;
  font-family: roboto;
`

export const HeadContainer = styled.div`
  background-color: #ebebeb;
  padding: 5px 30px;
  display: flex;
  align-items: center;
`
export const Icon = styled.div`
  background-color: #d7dfe9;
  color: #ff0000;
  font-size: 28px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 18px;
`
export const TrendingHead = styled.h1``

export const TrendingVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
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
