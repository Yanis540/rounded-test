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
import moment from "moment"
interface CallsTableRowProps {
    call : Call
};

function CallsTableRow({call}:CallsTableRowProps) {
    const [open, setOpen] = useState<boolean>(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const openTrigger = ()=>setOpen(true)
    if (isDesktop) {
        return (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Row call={call}open={openTrigger} /> 
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-none">
              <DialogHeader>
                <DialogTitle>Détails de l&apos;appel {call.from} {moment(call.date,"YYYYMMDD").local().calendar()}</DialogTitle>
                <DialogDescription>
                    {call.summary}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )
    }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Row call={call}open={openTrigger}/>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Détails de l&apos;appel {call.from} {moment(call.date,"YYYYMMDD").local().calendar()}</DrawerTitle>
              <DrawerDescription>
              { call.summary}
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

function Row({call,open} : {call:Call,open:()=>void}){
    const duration  = moment.utc(call.duration*1000).format('HH:mm:ss')
    const callDate= moment(call.date,"YYYYMMDD").local().calendar({
        sameDay: '[Today] [at] HH:mm:ss',
        lastDay: '[Yesterday] [at] HH:mm:ss',
        sameElse: 'DD/MM/YYYY [at] HH:mm:ss'
    })
    return (
    <TableRow onClick={open}>
        <TableCell className="font-medium">
            {callDate}
        </TableCell>
        <TableCell className="font-medium">
            {call.from}
        </TableCell>
        <TableCell className="font-medium ">
            {/* 7m 32s */}
            <div className="px-1 py-2 w-min bg-primary rounded-xl">
                {duration}
            </div>
        </TableCell>
        <TableCell className="font-medium">
            {call.subject}
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