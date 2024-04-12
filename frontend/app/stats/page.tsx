'use client'
import AuthenticatedLayout from '@/Layout/AuthenticatedLayout';
import React from 'react';
import { useFetchStats } from './hooks/use-fetch-stats';
import { Icons } from '@/components/icons';
import StatsDashboard from './components/StatsDashboard';

interface StatsProps {

};

function Stats({}:StatsProps) {
    const {data,isLoading,error} = useFetchStats("+33123456789");
    if(isLoading) return (
        <AuthenticatedLayout>
            <div className="flex flex-col h-full w-full items-center justify-center">
                <Icons.spinner className="text-primary" />
            </div>
        </AuthenticatedLayout>
    ) ;
    if(error) return (
        <AuthenticatedLayout>
            <h2 className="text-xl text-red-500 flex flex-col items-center justify-center">An unexpected error occured!</h2>;
        </AuthenticatedLayout>
    ) ;
    return (
    <AuthenticatedLayout>
       <StatsDashboard stats={data?.stats!}/> 
    </AuthenticatedLayout>
    );
};

export default Stats;