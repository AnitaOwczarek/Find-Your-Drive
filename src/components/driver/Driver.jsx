import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="/" />
      </div>
      <div>
        <h2>Find your perfect car <span>to try before you buy</span></h2>
        <p>Make sure your futhure whells work well with your lifstyle by taking your time in teh driver's seat.</p>
        <button>Browser Cars</button>
      </div>
    </div>
  )
}

export default Driver
