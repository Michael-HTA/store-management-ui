import Link from "next/link";
import { useState, useEffect } from "react";

export default function BestSellingProducts(props) {

    const { apiLink, tableHeadContent } = props;

    const items = [
        { id: 1, product: 'Paracetamol Tablet', price: 300 },
        { id: 2, product: 'Doxycycline Tablet', price: 350 },
        { id: 3, product: 'Antiva Tablet', price: 100 },
        { id: 4, product: 'Milo Tablet', price: 2000 },
        { id: 5, product: 'Doxiciline', price: 300 },

    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        if (apiLink) {
            const fetchData = async () => {
                try {
                    const response = await fetch(apiLink);
                    const data = await response.json();
                    setData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }
    }, [apiLink]);

    return (
        <>
            <div className="border rounded-xl bg-white mt-4">
                <div className="m-2">
                    <div className="flex justify-between w-96">
                        <p className="font-medium">
                            {tableHeadContent}
                        </p>
                        <Link href='/' className="hover:underline hover:text-blue-600">View all</Link>
                    </div>
                    <div className="w-96 overflow-y-auto h-40 overscroll-auto scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-left" >No</td>
                                    <td>Product Name</td>
                                    <td>Price</td>
                                </tr>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td className="w-1/6">{item.id}</td>
                                        <td className="w-3/4">{item.product}</td>
                                        <td className="w-1/4">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
