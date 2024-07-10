import styled from 'styled-components'

export const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90vh;
    background-color: ${props => props.bgColor};
    margin-top: 60px;
    margin-bottom: 60px;
    overflow-y: auto;
    @media screen and (min-width: 768px) {
        margin-left: 250px;
        margin-right: 0px;
    }
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
