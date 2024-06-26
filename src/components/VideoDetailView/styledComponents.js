import styled from 'styled-components'

export const VideoDetailViewContainer = styled.div`
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
export const LoaderConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
