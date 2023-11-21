import React from 'react'
import styles from './sidebar.module.css'
import { items } from './items'
import MenuLinks from './menuLinks/menuLinks'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="" alt="" className={styles.userImage} sizes='50' height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}>User Name</span>
          <span className={styles.userTitle}>Administration</span>
        </div>
      </div>
      <ul className={styles.list}>
      {
        items.map(item => {
          return (
            <li key={item.title} >
              <span className={styles.category}>{item.title}</span>
              {
                item.lists.map(i => (
                  <MenuLinks i={i} key={i.title} />
                ))
              }
            </li>
          )
        })
      }
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default Sidebar