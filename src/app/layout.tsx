'use client'
import React, { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '@/app/components/sidebar'
import Header from '@/app/components/header'; // Fix the casing of the import statement
import PageWrapper from '@/app/components/pagewrapper'
import Providers from '@/app/provider'; // Fix the import statement
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> 
  
      <div className='min-h-screen flex'>
        
            <Sidebar></Sidebar>
            <Header></Header>
            <Providers>
            <PageWrapper children={children}></PageWrapper>
            </Providers>
          </div>

      </body>

    </html>
  );
}
