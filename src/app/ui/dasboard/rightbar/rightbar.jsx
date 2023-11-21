import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          {/* <Image src="" fill  className={styles.bg}/> */}
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>Our Latest article upcoming</h3>
          <span className={styles.subtitle}>Please learn more about it..</span>
          <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis tempora amet necessitatibus nesciunt cupiditate sapiente earum. Quia asperiores inventore laborum!</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
      </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          {/* <Image src="" fill /> */}
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>Our Latest article upcoming</h3>
          <span className={styles.subtitle}>Please learn more about it..</span>
          <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis tempora amet necessitatibus nesciunt cupiditate sapiente earum. Quia asperiores inventore laborum!</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar