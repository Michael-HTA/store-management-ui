import Navigator from "../../../components/Navigator";

export default function DashboardLayout({ children }){
    return (
        <div className="flex">
            <div className="flex-none m-0 p-0">
               <Navigator></Navigator>
            </div>
            <div className="flex-1 m-0 p-0">
                {children}
            </div>
        </div >
    )
}