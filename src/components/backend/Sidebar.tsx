import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='bg-slate-800 space-y-6 w-60 h-screen p-3 text-slate-50 fixed left-0 top-0'>
            <Link href={"#"} className='mb-6' >Logo</Link>
            <div className='space-y-3 flex flex-col'>
                <Link href={"#"}>Dashboard</Link>
                <Link href={"#"}>Cataloug</Link>
                <Link href={"#"}>Customers</Link>
                <Link href={"#"}>Markets</Link>
                <Link href={"#"}>Farmers</Link>
                <Link href={"#"}>Orders</Link>
                <Link href={"#"}>Staff</Link>
                <Link href={"#"}>Settings</Link>
                <Link href={"#"}>Online Store</Link>
            </div>
        </div>
    )
}

export default Sidebar
