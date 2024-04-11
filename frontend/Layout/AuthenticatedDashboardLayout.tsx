import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { ReactNode } from 'react';

interface AuthenticatedDashboardLayoutProps {
    children : ReactNode
};

function AuthenticatedDashboardLayout({children}:AuthenticatedDashboardLayoutProps) {
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

export default AuthenticatedDashboardLayout;