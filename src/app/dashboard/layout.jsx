import React from 'react'
import Sidebar from '../ui/dasboard/sidebar/sidebar'
import Navbar from '../ui/dasboard/navbar/navbar'
import Footer from '../ui/dasboard/footer/footer'
import styles from '../ui/dasboard/dashboard.module.css'

const DashboardLayout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>

        <div className={styles.content}>
            <Navbar />
            {children}
            <Footer />
        </div>

    </div>
  )
}

export default DashboardLayout