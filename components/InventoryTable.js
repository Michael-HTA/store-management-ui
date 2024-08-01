function InventoryTable() {
  const rows = Array.from({ length: 100 }, (_,index) => (
    <tr key={index} className="text-center">
      <td>{index + 1}</td>
      <td>Paracetamol</td>
      <td>500mg</td>
      <td>Tablet</td>
      <td>7.2.2026</td>
      <td>Zifram</td>
      <td>400</td>
      <td>100Ks</td>
      <td className="justify-evenly flex">
        <button className="bg-red-600 hover:bg-red-700 p-1 rounded text-xs">Del</button>
        <button className="bg-green-600 hover:bg-green-700 p-1 rounded text-xs">Edit</button>
      </td>
    </tr>
  ));

  return (
    <>
      <table className="w-full h-screen border rounded">
        <thead className="sticky top-0 bg-slate-400">
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
    </>
  );
}

export default InventoryTable;
