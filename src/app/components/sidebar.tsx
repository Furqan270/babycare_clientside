import Image from 'next/image';
import { SIDENAV_ITEMS } from '@/SIDEBAR_CONSTANSTS';
import { SideBarMenuItem } from './sidebar-menu-item';
import classNames from 'classnames';
import { useSidebarToggle } from '@/app/hooks/use-sidebar-toggle';
import { SideNavItem } from '@/app/types/types'; // Import your SideNavItem type

export default function Sidebar () {
    const { toggleCollapse } = useSidebarToggle();
    const asideStyle = classNames("fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]", {
        ["sm:w-[5rem] sm:left-0 left-[-100%]"]: toggleCollapse,
        ["w-[20rem]"]: !toggleCollapse
    })

    return (
        <aside className={asideStyle}>
            <div className="flex relative items-center py-5 px-3.5">
                <Image alt="auto" src='/bg.png' width={35} height={35} ></Image>
                {!toggleCollapse && <h3 className="pl-3 font-bold text-l text-[#fffbfb] min-w-max ">
                    BabyCare Dashboard
                </h3>}
            </div>
            <nav className='flex flex-col gap-2 transition duration-300'>
                {SIDENAV_ITEMS.map((item: SideNavItem, index: number) => (
                    <SideBarMenuItem key={index} item={item} toggleCollapse={toggleCollapse} />
                ))}
            </nav>
        </aside>
    )
}
