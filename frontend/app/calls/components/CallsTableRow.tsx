'use client'
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/components/ui/table';
import { useMediaQuery } from '@/hooks';
import { MoreHorizontal } from 'lucide-react';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface CallsTableRowProps {

};

function CallsTableRow({}:CallsTableRowProps) {
    const [open, setOpen] = useState<boolean>(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const openTrigger = ()=>setOpen(true)
    if (isDesktop) {
        return (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Row open={openTrigger} /> 
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-none">
              <DialogHeader>
                <DialogTitle>Détails de l&apos;appel</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )
    }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Row open={openTrigger}/>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Détails de l&apos;appel</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you&aposre done.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    )
   
};

function Row({open} : {open:()=>void}){
    return (
    <TableRow onClick={open}>
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
    )
}

export default CallsTableRow;