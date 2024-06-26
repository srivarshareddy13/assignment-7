import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 250px;
  }
`

export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GamingTitleIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const GamingText = styled.h1`
    font-family: 'Roboto'
    font-size: 25px;
    color: ${props => props.color};
    @media screen and (min-width: 768px) {
        font-size: 35px;
    }
`
export const LoaderConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
