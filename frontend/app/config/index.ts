import {
    Home,
    LineChart,
    LucideIcon,
    Package,
    ShoppingCart,
    Phone
} from "lucide-react"
export const routes : {
    title:string,
    Icon : LucideIcon,
    link : string
}[] = [
    {
        title: "Dashboard",
        Icon: Home ,
        link : "/",
    },
    {
        title: "Calls",
        Icon: Phone ,
        link : "/calls",
    },
    {
        title: "Products",
        Icon: Package ,
        link : "/products",
    },
    {
        title: "Analytics",
        Icon: LineChart ,
        link : "/analytics",
    },
]