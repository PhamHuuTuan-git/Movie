"use client"
import "./style.scss";
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import SideBar from '@/components/Sidebar/SideBar';
import React from 'react'
import { useSelector } from 'react-redux';
import { sidebarSelectorMode } from "@/redux-toolkit/selector";
function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarMode = useSelector(sidebarSelectorMode);
  return (
    <div>

      <div className={`sidebar--container ${sidebarMode === true ? "on" : "off"}`}>
        <SideBar />
      </div>

      <div>
        <div style={{ display: "flex" }}>

          <div className={`fake-sidebar ${sidebarMode === true ? "on" : "off"}`}></div>
          <div style={{ flex: 1, zIndex:1 }}>
            {/* Header */}
            <Header />

            {/* Page */}
            <div className="content--container">
              {children}

              {/* Footer */}
              <Footer />
            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default RootLayout