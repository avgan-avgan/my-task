import styled from 'styled-components'

export const FixedHeader = styled.div`
  text-align: center;
  font-family: "Arial Black";
`

export const FixedImgCont = styled.div`
  width: 100%;
  height: auto;
`

export const FixedImg = styled.div`
  border-radius: 4px;
  margin: 1px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  float: left;
  width: 200px;
  height: 200px;
  @media only screen and (max-width: 1200px) {
      width: 410px;
      height: 410px;
    
  };
  @media only screen and (max-width: 1096px) {
      width: 740px;
      height: 690px;
    
  }
`