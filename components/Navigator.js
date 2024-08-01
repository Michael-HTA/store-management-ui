'use client'
import { Cog6ToothIcon, BuildingStorefrontIcon, ClipboardDocumentCheckIcon, HomeIcon, ArrowUturnLeftIcon, UserGroupIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { Link, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Navigator() {

    const drawerWidth = 240;
const links = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: HomeIcon,
    },
    {
        path: "/inventory",
        name: "Inventory",
        icon: BuildingStorefrontIcon,
    },
    {
        path: "/sales",
        name: "Sales",
        icon: ClipboardDocumentCheckIcon,
    },
    {
        path: "/supplier",
        name: "Supplier",
        icon: UserGroupIcon,
    },
    {
        path: "/product",
        name: "Products",
        icon: ArchiveBoxIcon,
    },
    {
        path: "/setting",
        name: "Setting",
        icon: Cog6ToothIcon,
    },
    {
        path: "/logout",
        name: "Logout",
        icon: ArrowUturnLeftIcon,
    },
];
    const path = usePathname();
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
        >
            <List>
                {links.map((item) => (
                    <ListItem key={item.name} >
                        <ListItemButton component={Link} to={item.path} selected={path === item.path} sx={{
                            "&.Mui-selected": {
                                backgroundColor: "#DCDCDC"
                            },
                            ":hover": {
                                backgroundColor: "#DCDCDC"
                            }
                        }}>
                            <ListItemIcon className="w-6 h-6"> {/* Adjust icon size */}
                                <item.icon className="w-full h-full" /> {/* Ensure icon fits within ListItemIcon */}
                            </ListItemIcon>
                            <ListItemText primary={item.name} className="text-sm" /> {/* Adjust text size */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
