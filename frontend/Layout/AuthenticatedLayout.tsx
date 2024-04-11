import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { ReactNode } from 'react';

interface AuthenticatedLayoutProps {
    children : ReactNode
};

function AuthenticatedLayout({children}:AuthenticatedLayoutProps) {
    return (
    <div className="flex min-h-screen w-full flex-col bg-muted/5">
        <Sidebar /> 
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Navbar />
            {children} 
        </div>
    </div>
    );
};

export default AuthenticatedLayout;