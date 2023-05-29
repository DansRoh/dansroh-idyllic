/*
 * @Author: luoda
 * @Date: 2023-05-28 13:13:31
 * @LastEditTime: 2023-05-29 10:01:27
 * @LastEditors: luoda
 * @Description: 
 */
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      layout
      <Outlet></Outlet>
    </div>
  )
}
