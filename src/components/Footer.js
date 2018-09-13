import React from 'react'
import styled from 'styled-components'
import './Footer.css'

const FooterGroup = styled.div`
text-align: center;
height: 320px;

@media (max-width: 720px) {
}
`

const FooterSectionGroup = styled.div`
background: white;
padding: 0 0 100px 0;

@media (max-width: 640px) {
    padding: 0 0 0 0;
  }
`

const FooterTitle = styled.h3`
font-size: 12px;
font-weight: 400;
color: black;
text-transform: uppercase;
letter-spacing: 3px;
margin: 10px 0 0 0;

@media (max-width: 640px) {
    line-height: 1em;
    font-size: 12px;
    color: black;
  }
`

const FooterImg = styled.img`
width: 200px;
margin: 100px 0 0 0;
align-self: end;
`

const Footer = props => (
    <FooterGroup>
        <FooterSectionGroup>
            <FooterImg src={props.image} />
                <FooterTitle>{props.title}</FooterTitle>
        </FooterSectionGroup>
    </FooterGroup>
)

export default Footer