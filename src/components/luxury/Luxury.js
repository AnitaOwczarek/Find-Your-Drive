import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
            <p>
                <span>Select from the top luxury vehicles to roll in style</span>
            </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1628901341130-4f2255b326f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="/" />
            <div>
                <h3>Rolls Royce</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1589134723101-5abd32593adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="/" />
            <div>
                <h3>Maserati</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1604054094723-3a949e4a8993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" alt="/" />
            <div>
                <h3>Range Rover</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1584060622420-0673aad46076?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="/" />
            <div>
                <h3>Porsche</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Luxury
