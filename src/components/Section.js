import React from 'react'
import styled from 'styled-components'
import img from '../images/cocktail_bg.jpg'


const SectionGroup = styled.div`
display: grid;
grid-template-columns: 50% 50%;

@media (max-width: 640px) {
    grid-template-columns: 1fr;
}
`

const SectionImageGroup = styled.div`
grid-column: 1;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
overflow: hidden;

@media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SectionTitleGroup = styled.div`
grid-column: 2;
background: #1E1E1E;
padding: 45px 50px 100px 100px;

@media (max-width: 640px) {
    padding: 8px 8px 40px 40px;
  }
`

const SectionTitle = styled.h1`
line-height: 1em;
font-size: 75px;
color: white;
width: 250px;

@media (max-width: 640px) {
    line-height: 1em;
    font-size: 75px;
    color: white;
    width: 200px;
  }
`

const SectionSubTitle = styled.h2`
width: 350px;
color: white;
font-style: normal;
font-weight: 500;
line-height: normal;
font-size: 30px;
letter-spacing: 0.05em;
margin: -20px 30px 30px 0;

@media (max-width: 640px) {
    width: 60%;
    font-size: 24px;
  }
  
`

const SectionText = styled.p`
width: 350px;
font-family: Work Sans;
font-style: normal;
font-weight: 500;
line-height: normal;
font-size: 20px;
letter-spacing: 0.05em;
color: #FFFFFF;
margin: 0 30px 40px 0;

@media (max-width: 640px) {
    width: 80%;
    font-size: 16px;
  }
`

const SectionButton = styled.button`
font-size: 12px;
font-weight: 400;
color: black;
text-transform: uppercase;
letter-spacing: 3px;
background: #08FED2;
padding: 20px 35px;
border-radius: 40px;
border: none;
transition: 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
  background: white;
  color: black;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-3px);
  cursor: pointer;
  }
`

const Section = props => (
    <SectionGroup>
        <SectionImageGroup>
        </SectionImageGroup>
        <SectionTitleGroup>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionSubTitle>{props.subtitle}</SectionSubTitle>
                <SectionText>{props.text}</SectionText>
                <a href="http://itunes.apple.com/us/app/200-drinks/id1033405195?mt=8"><SectionButton>{props.button}</SectionButton></a>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section