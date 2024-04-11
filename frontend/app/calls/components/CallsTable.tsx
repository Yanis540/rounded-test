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
interface CallsTableProps {

};

function CallsTable({}:CallsTableProps) {
    const {calls} = useCallsStore();
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
                    calls?.map((call,i)=>(
                        <CallsTableRow key={call.from+"-"+i} call={call} />
                    ))
                }
            </TableBody>
        </Table>
    );
};

export default CallsTable;