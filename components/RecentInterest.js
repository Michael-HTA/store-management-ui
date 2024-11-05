'use client'
import Link from "next/link";
import { useState, useEffect } from "react";


export default function RecentInterest(props) {
    const { apiLink, backgroundimage, className, cardHeader, cardContent, cardLink } = props;

    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const [data, setData] = useState('');

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

        <div className={`w-44 rounded-2xl h-28 grid content-around p-2.5 ${className}`} style={backgroundImageStyle} >
            <div>{cardHeader}</div>
            <h5>{data ? data.msg : cardContent}</h5>
            <Link href='/' className="hover:text-blue-500 hover:underline">{cardLink}</Link>
        </div>

    );
}
