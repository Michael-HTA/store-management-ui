'use client';
import { usePathname } from 'next/navigation'
import React from 'react';
import { 
  Cog6ToothIcon, 
  BuildingStorefrontIcon, 
  ClipboardDocumentCheckIcon, 
  HomeIcon, 
  ArrowUturnLeftIcon, 
  UserGroupIcon, 
  ArchiveBoxIcon 
} from "@heroicons/react/24/outline";
import Link from 'next/link';


const Navigator = () => {
  const path = usePathname()
  const iconSize = 'w-6 h-6 mr-2';

  const links = [
    { path: "/dashboard", name: "Dashboard", icon: <HomeIcon className={iconSize}/> },
    { path: "/inventory", name: "Inventory", icon: <BuildingStorefrontIcon className={iconSize}/> },
    { path: "/sales", name: "Sales", icon: <ClipboardDocumentCheckIcon className={iconSize}/> },
    { path: "/supplier", name: "Supplier", icon: <UserGroupIcon className={iconSize}/> },
    { path: "/product", name: "Products", icon: <ArchiveBoxIcon className={iconSize}/> },
    { path: "/setting", name: "Setting", icon: <Cog6ToothIcon className={iconSize}/> },
    { path: "/logout", name: "Logout", icon: <ArrowUturnLeftIcon className={iconSize}/> },
  ];

  return (
    <nav className='w-60 h-full'>
      <header className='text-center p-2.5 text-3xl'>Welcome</header>
      <ul>
        {links.map((link) => (
          <li key={link.path}> 
            <Link href={link.path}  className={` m-0.5 hover:bg-slate-300 rounded-xl flex items-center px-[60px] py-3.5 ${path === link.path && 'bg-slate-300'}`}> 
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
