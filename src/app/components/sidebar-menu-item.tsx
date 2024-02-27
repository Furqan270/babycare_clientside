import { SideNavItem } from "@/app/types/types";
import Link from "next/link";
export const SideBarMenuItem = ({item, toggleCollapse} : {item:SideNavItem, toggleCollapse: boolean }) => {
    const linkStyle="flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transition duration-200"
    const ddLinkStyle=linkStyle;
    return (
        <>        
        {
            item.submenu
            ?(<div className="rounded-md min-w-[18px]">
    
            </div>) 
            :(<Link href={item.path} className={ddLinkStyle}>
                {item.icon}
                {!toggleCollapse && <span className="ml-3 leading-6 font-semibold">{item.title}</span> }
                </Link>)
        }
        </>

    )
}