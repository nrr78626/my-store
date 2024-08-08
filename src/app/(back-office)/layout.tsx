import Navbar from "@/components/backend/Navbar";
import Sidebar from "@/components/backend/Sidebar";
import React from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            {/*sidebar*/}
            <Sidebar />
            <div className="w-full">
                {/*Header*/}
                <Navbar />
                <main className="p-8 bg-slate-950 text-gray-50 min-h-screen mt-16 ml-60">
                    {children}
                </main>
                {/*Main*/}
            </div>
            {/*main body*/}
        </div>
    )
}

export default Layout

