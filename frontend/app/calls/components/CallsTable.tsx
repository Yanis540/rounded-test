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
interface CallsTableProps {

};

function CallsTable({}:CallsTableProps) {
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
                <TableRow>
                    <TableCell className="font-medium">
                        Aujourdhui à 14h00 
                    </TableCell>
                    <TableCell className="font-medium">
                        +33 744744308
                    </TableCell>
                    <TableCell className="font-medium">
                        7m 32s
                    </TableCell>
                    <TableCell className="font-medium">
                        Renseignment
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default CallsTable;