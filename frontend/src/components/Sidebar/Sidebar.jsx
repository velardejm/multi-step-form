import SidebarStep from "./SidebarStep"


export default function Sidebar() {
    return (
        <div className="bg-[url('./assets/bg-sidebar-desktop.svg')] w-[274px] h-[568px]">
            <SidebarStep step={1} description={'YOUR INFO'}/>
            <SidebarStep step={2} description={'SELECT PLAN'}/>
            <SidebarStep step={3} description={'ADD-ONS'}/>
            <SidebarStep step={4} description={'SUMMARY'}/>
        </div>
    )
}