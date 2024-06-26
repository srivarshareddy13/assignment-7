import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`
export const NavigationLgContainer = styled.div`
  position: fixed;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 250px;
  background-color: ${props => props.bgColor} @media screen and
    (max-width: 768px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 0px;
  list-style-type: none;
  flex-grow: 1;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const NavigationSmallContainer = styled.nav`
    position: fixed;
    bottom: 0
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.bgColor}
    @media screen and (min-width: 768px) {
        display: none;
    }
`
