import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src="" alt sizes={40} height={40} className={styles.userImage}/>
              Askari
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.12.2000</td>
            <td>$222</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
              <Image src="" alt sizes={40} height={40} className={styles.userImage}/>
              Askari
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Pending</span>
            </td>
            <td>12.12.2000</td>
            <td>$222</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
              <Image src="" alt sizes={40} height={40} className={styles.userImage}/>
              Askari
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Pending</span>
            </td>
            <td>12.12.2000</td>
            <td>$222</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions