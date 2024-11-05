import React from 'react';

function InventoryRow({ index }) {
  const td = 'py-1'
  return (
    <tr key={index} className="text-center">
      <td className={td}>{index + 1}</td>
      <td className={td}>Paracetamol</td>
      <td className={td}>500mg</td>
      <td className={td}>Tablet</td>
      <td className={td}>7.2.2026</td>
      <td className={td}>Zifram</td>
      <td className={td}>400</td>
      <td className={td}>100Ks</td>
      <td className={`justify-evenly flex ${td}`}>
        <button className="bg-red-600 hover:bg-red-700 p-1 rounded text-xs">Del</button>
        <button className="bg-green-600 hover:bg-green-700 p-1 rounded text-xs">Edit</button>
      </td>
    </tr>
  );
}

function InventoryTable() {
  const rows = Array.from({ length: 100 }, (_, index) => (
    <InventoryRow key={index} index={index} />
  ));

  return (
    <div className="overflow-auto h-screen">
      <table className="w-full">
        <thead className="sticky top-0 bg-slate-300">
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Specification Model</th>
            <th>Unit</th>
            <th>Expiry Date</th>
            <th>Manufacturer</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
