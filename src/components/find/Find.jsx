import React from 'react'
import styles from './find.module.css'
import Card from './Card'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Find = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your driver</h1>
        <div className={styles.text_bg}>
        <p>
            <span>Explore the word's largest car sharing marketplace</span>
        </p>
        </div>
      </div>
      <div className={styles.slider_container}>
      <Carousel responsive={responsive}>
        <div>
        <Card 
              image='https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' 
              make="Audi"/>
        </div>
        <div>
        <Card 
              image='https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80' 
              make="BMW"/>
        </div>
        <div>
        <Card 
              image='https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' 
              make="Tesla"/>
        </div>
        <div>
        <Card 
              image='https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' 
              make="Volkswagen"/>
        </div>
        <div>
        <Card 
              image='https://images.unsplash.com/photo-1601679147136-22d1032399e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80' 
              make="Porche"/>
        </div>
        <div>
        <Card 
              image='https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1231&q=80' 
              make="Toyota"/>
        </div>
        <div>
        <Card 
              image='https://images.unsplash.com/photo-1551817280-6d59c77ce1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1251&q=80' 
              make="Nissan"/>
        </div>
        <div>
        <Card 
              image='https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=393&q=80' 
              make="Mercedes"/>
        </div>
      </Carousel>;
      </div>
    </div>
  )
}

export default Find

