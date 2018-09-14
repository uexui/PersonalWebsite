import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section'
import SectionSmall from '../components/SectionSmall'
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <p>We help you make delicious classic, modern and tiki cocktails right in your home.</p>
        <a href="http://itunes.apple.com/us/app/200-drinks/id1033405195?mt=8"><button>DOWNLOAD THE FREE APP</button></a>
      </div>
    </div>

    <div className="SectionGroup">
      <Section
      title="Free Drinks"
      subtitle="New drink recipes added every two weeks. For free."
      text="Other cocktail apps charge you to extend your recipe archive. We don't and never will. Period."
      button="Download"
      />
    </div>

    <div className="CardTitle">
      <h1>v2.7</h1>
      <p>Features</p>
    </div>

    <div className="CardGroup">

      <div className="Card">
         <Card
        image={require('../images/Cocktail101_5_Cover.jpg')}
        title="COCKTAIL 101 & MORE"
        text="Every two weeks we feature new content to teach you cocktail tips, tricks and techniques. Think of us as a guided hand into the world of craft cocktails, making it possible to offer your friends first-class drinks in your home."
        />
      </div>

      <div className="Card">
       <Card
        image={require('../images/SideCar_Cover2.jpg')}
        title="CURATED RECIPES"
        text="The full instructions on how to mix all of the well-known classic, modern and tiki cocktails. With more added all the time. The app and its recipes will keep on growing."
        />
      </div>
      
      <div className="Card">
       <Card

        image={require('../images/filter.png')}
        title="SEARCH & FILTER"
        text="Find exactly what you are looking for with our powerful recipe search and filtering features. Search or filter by ingredient, name, type and more."
        />
      </div>

    </div>
      <SectionSmall
      title="Powerful new features coming this winter?"
      button="Download The Free App"
      />

      <Footer
      title="Designed by J.B. Chaykowsky!"
      image={require('../images/jb_birthday.png')}
      />

      <div className="FooterNav">
        <Link to="/appsupport">SUPPORT</Link>
        <Link to="/privacy">Privacy Policy</Link>
      COPYRIGHT 2018
      </div>
  </div>
)

export default IndexPage
