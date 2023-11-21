import React from 'react'
import Card from '../ui/dasboard/card/card'
import styles from '../ui/dasboard/dashboard.module.css'
import Rightbar from '../ui/dasboard/rightbar/rightbar'
import Transactions from '../ui/dasboard/transactions/transactions'
import Chart from '../ui/dasboard/chart/chart'
const Dasboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dasboard