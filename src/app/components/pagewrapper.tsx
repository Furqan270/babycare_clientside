import classNames from "classnames";
import { useSidebarToggle } from '@/app/hooks/use-sidebar-toggle';
import { ReactNode } from "react";

export default function PageWrapper({children}: { children: ReactNode}) {
    const {toggleCollapse} = useSidebarToggle();
    const pageStyle = classNames("bg-slate-50 flex-grow text-black p-2 mt-16",
    {
        ["sm:pl-[20rem]"] : !toggleCollapse,
        ["sm:pl-[5rem]"] :toggleCollapse
    })
    return (
        <div className ={pageStyle}>
          {children}
        </div>
    )
}