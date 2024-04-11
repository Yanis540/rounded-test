'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"

import AuthenticatedLayout from "@/Layout/AuthenticatedLayout"
import CallsDashboardHeader from "./components/CallsDashboardHeader"
import CallsTable from "./components/CallsTable"
import { useFetchCalls } from "./hooks/use-fetch-calls"
import { Icons } from "@/components/icons"

export default function Dashboard() {
    const {data,isLoading,error,fetch} = useFetchCalls("+33123456789")
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
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs className="flex-1 h-full" defaultValue="all">
            <CallsDashboardHeader fetch={fetch}  /> 
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Appels</CardTitle>
                  <CardDescription>
                    Gérer tous vos appels. 
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <CallsTable />
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
    </AuthenticatedLayout>
  )
}
