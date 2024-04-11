import Image from "next/image"
import {
    MoreHorizontal,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CallsTableRow from "./CallsTableRow"
import { useCallsStore } from "../state/use-calls-store"
import { useEffect, useMemo } from "react"
interface CallsTableProps {
    filter?:(c:Call[])=>Call[]
    value:string
    activeTab : string
};

function CallsTable({value,activeTab,filter}:CallsTableProps) {
    const {filtered_calls,set_filtered} = useCallsStore();
    const isActive = useMemo(()=>activeTab== value,[activeTab])
    useEffect(()=>{
        if(isActive)
            set_filtered(filter)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isActive])
    
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Appealant</TableHead>
                    <TableHead>Durée</TableHead>
                    <TableHead>Motif</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    filtered_calls?.map((call,i)=>(
                        <CallsTableRow key={call.from+"-"+i} call={call} />
                    ))
                }
            </TableBody>
        </Table>
    );
};

export default CallsTable;