
import {
  File,
  ListFilter,
  PlusCircle,
  RefreshCcw,
} from "lucide-react"


import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {

  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { tabsValues } from "../type"
interface CallsDashboardHeaderProps {
    fetch : ()=>void
};

function CallsDashboardHeader({ fetch}: CallsDashboardHeaderProps) {

    return (
        <div className="flex items-center">
            <TabsList>
                {
                    tabsValues.map((t)=>(

                        <TabsTrigger key={t.key} value={t.key}>{t.value}</TabsTrigger>
                    ))
                }
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Filter
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>
                            Active
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                            Archived
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
           
                <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Export
                    </span>
                </Button>
               
                <Button size="sm"  className="h-8 gap-1" onClick={fetch}>
                    <RefreshCcw className="h-3.5 w-3.5 " />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Refresh
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default CallsDashboardHeader;