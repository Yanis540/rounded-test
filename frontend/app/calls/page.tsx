

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

export default function Dashboard() {
  return (
    <AuthenticatedLayout>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs className="flex-1 h-full" defaultValue="all">
            <CallsDashboardHeader /> 
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
