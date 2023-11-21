import React from 'react'
import styles from "@/app/ui/dasboard/users/userDetail/userDetail.module.css"
import Image from 'next/image'

const UserDetail = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
                {/* <Image src="" fill/> */}
            </div>
            Cavin
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label htmlFor="">Username</label>
            <input type="text" name='username' placeholder='Cavin' />
            <label htmlFor="">Email</label>
            <input type="email" name='emaik' placeholder='Cavin' />
            <label htmlFor="">Password</label>
            <input type="password" name='password' />
            <label htmlFor="">Phone</label>
            <input type="text" name='phone' placeholder='+61 4444' />
            <label htmlFor="">Address</label>
            <input type="textarea" name='address' placeholder='Sydney' />
            <label htmlFor="">Is Admin</label>
            <select name='isAdmin' id='isAdmin'>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label htmlFor="">Is Active</label>
            <select name='isActive' id='isActive'>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>

            <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UserDetail