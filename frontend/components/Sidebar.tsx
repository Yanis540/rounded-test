'use client'
import Link from "next/link"
import {
    Package2,
    Settings,
} from "lucide-react"


import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { routes } from "@/app/config"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface SidebarProps {

};




function Sidebar({ }: SidebarProps) {
    const pathname = usePathname()
    
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r-[1px] border-primary bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Rounded</span>
                </Link>
                {routes.map((route,i)=>(
                    <Tooltip key={route.link+"-"+i}>
                        <TooltipTrigger asChild>
                            <Link
                                href={route.link}
                                className={cn(
                                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                                    pathname.startsWith(route.link) && "bg-accent text-accent-foreground"
                                )}
                            >
                                <route.Icon className="h-5 w-5" />
                                <span className="sr-only">{route.title}</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{route.title}</TooltipContent>
                    </Tooltip>
                ))}
            
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    );
};

export default Sidebar;