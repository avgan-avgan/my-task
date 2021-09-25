import {NavLink} from "react-router-dom";
import styled from 'styled-components'

export const NavFixedItem_LINK = styled(NavLink)`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 5px;
  font-size: 20px;
  color: #d9dbdb;
`;

export const ULFixed = styled.ul`
  background-color: black;
  list-style: none;
  //border: 2px solid red;
  position: fixed; 
  width: 200px; 
  height: 100%; 
  top: 0; 
  left: 0;
  margin: 0;
  padding: 0;
`

export const LIFixed = styled.li`
  overflow: hidden;
  &:hover {
    background-color: #252424;
  }
`

export const FixedMainDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden
`

export const FixedRoutesCont = styled.div`
  //border: 2px solid pink;
  width: 1200px;
  margin-left: 235px;
  overflow-y: scroll;
  overflow-x: hidden
`