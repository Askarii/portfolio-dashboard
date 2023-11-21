import React from 'react'
import style from '@/app/ui/dasboard/users/user.module.css'
import Search from '@/app/ui/dasboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pageination from '@/app/ui/dasboard/pagination/pagination'

const Users = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for user"/>
        <Link href="/dashboard/users/test">
          <button className={style.addButton}>Add New</button>
        </Link>
      </div>

      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <td>
            <div className={style.user}>
              <Image src="" sizes='40px' className={style.userImage}/> 
              Askari
            </div>
          </td>
          <td>muhammadaskari26@gmail.com</td>
          <td>13.12.2000</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <div className={style.buttons}>
              <Link href="/">
                <button className={`${style.button} ${style.view}`}>View</button>
              </Link>
              <button className={`${style.button} ${style.delete}`}>Delete</button>
            </div>
          </td>
        </tbody>
      </table>
      <Pageination />
    </div>
  )
}

export default Users