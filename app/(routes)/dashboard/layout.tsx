import React, { ReactNode } from 'react'
import Header from './_components/Header';

type DashboardLayoutProps = {
    children: ReactNode;
  };

function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <div>
        <Header/>
        <div className='pt-10 px-10 md:px-20 lg:px-40 xl:px-60'>
            {children}
        </div>
      
    </div>
  )
}

export default DashboardLayout
