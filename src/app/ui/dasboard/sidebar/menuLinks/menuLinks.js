"use client"
import Link from 'next/link'
import React from 'react'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'


const MenuLinks = ({i}) => {
  const pathName = usePathname()
  return (
    <Link href={i.path} className={`${styles.container} ${pathName === i.path && styles.active}`}>
        {i.icon}
        {i.title}
    </Link>
  )
}

export default MenuLinks