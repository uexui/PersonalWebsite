import React from 'react'
import styled from 'styled-components'

const SectionSmallGroup = styled.div`
text-align: center;

@media (max-width: 720px) {
}
`

const SectionSmallTitleGroup = styled.div`
background: #08FED2;
padding: 45px 0 60px 0;

@media (max-width: 640px) {
    padding: 25px 0 40px 0;
  }
`

const SectionSmallTitle = styled.h1`
font-size: 36px;
color: black;

@media (max-width: 640px) {
    line-height: 1em;
    font-size: 30px;
    color: black;
  }
`

const SectionSmallButton = styled.button`
font-size: 12px;
font-weight: 400;
color: black;
text-transform: uppercase;
letter-spacing: 3px;
background: #FFFFFF;
padding: 20px 35px;
border-radius: 40px;
border: none;
transition: 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
    background: black
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-3px);
  cursor: pointer;
    }
  `

const SectionSmall = props => (
    <SectionSmallGroup>
        <SectionSmallTitleGroup>
                <SectionSmallTitle>{props.title}</SectionSmallTitle>
                <SectionSmallButton>{props.button}</SectionSmallButton>
        </SectionSmallTitleGroup>
    </SectionSmallGroup>
)

export default SectionSmall