import { BsHouseDoor } from "react-icons/bs";
import { SideNavItem } from "@/app/types/types";
import { LuAlignJustify, LuArchive } from "react-icons/lu";
import { ImFolderUpload } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";

export const SIDENAV_ITEMS:SideNavItem[] = [
    {
        title:"Dashboard",
        path:"/",
        icon:<BsHouseDoor size={20}/>
    },
    {
        title:"Product",
        path:"/product",
        icon:<ImFolderUpload size={20}/>,
    },
    {
        title:"Warehouse",
        path:"/warehouses",
        icon:<LuArchive size={20}/>
    },
    {
        title:"Order",
        path:"/order",
        icon:<LuAlignJustify size={20}/>
    },
    {
        title:"User",
        path:"/user",
        icon:<FaRegUser size={20}/>
    }
]