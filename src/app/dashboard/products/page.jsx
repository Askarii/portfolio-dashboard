import React from 'react'
import style from '@/app/ui/dasboard/products/products.module.css'
import Search from '@/app/ui/dasboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pageination from '@/app/ui/dasboard/pagination/pagination'

const Products = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for product"/>
        <Link href="/dashboard/products/test">
          <button className={style.addButton}>Add New</button>
        </Link>
      </div>

      <table className={style.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <td>
            <div className={style.product}>
              <Image src="" sizes='40px' className={style.productImage}/> 
              Askari
            </div>
          </td>
          <td>Desc</td>
          <td>$200</td>
          <td>13.12.2000</td>
          <td>30</td>
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

export default Products