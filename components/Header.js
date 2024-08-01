import React from 'react';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function Header(props) {
  const {headerName} = props;
  const path = usePathname();

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Get the search term from the input field
      const searchTerm = event.target.value;
      // Perform the search or any other action
      console.log('Searching for:', searchTerm);
      // Add your search logic here
    }
  };

  return (
    <div className="grid grid-cols-12 text-center h-12 items-center">
      {path === '/dashboard' ? <div className="col-span-2 ms-1 border-2 border-gray-500 rounded-2xl h-9 flex">
        <MagnifyingGlassIcon className="h-full w-8 border-0 pl-1 text-gray-500" />
        <input
          className="w-full h-full bg-transparent focus:outline-none rounded-r-2xl"
          placeholder="Search"
          onKeyDown={handleSearch}
        />
      </div> : <div className='col-span-2 '></div>}
      <div className="font-serif col-span-8 font-playwriteCuba">{headerName}</div>
      <div className="col-span-2 me-1 h-9 flex">
        <div className='w-full h-full'>
            <p className='text-xs'>Uroos Fatima</p>
            <p className='text-xs'>uroos.design@gmail.com</p>
        </div >
        <UserIcon className='text-gray-400 size-4/5 self-center'></UserIcon>
      </div>
    </div>
  );
}
