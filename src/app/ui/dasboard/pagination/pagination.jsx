import React from 'react'
import styles from './pagination.module.css'

const Pageination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button} disabled>Previous</div>
      <div className={styles.button}>Next</div>
    </div>
  )
}

export default Pageination