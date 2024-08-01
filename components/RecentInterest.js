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

        <div className={`w-52 mt-4 rounded-2xl h-28 grid grid-rows-3 gap-4 border-2 ${className}`} style={backgroundImageStyle} >
            <div className=" ms-3">{cardHeader}</div>
            <h5 className="ms-3">{data ? data.msg : cardContent}</h5>
            <Link className="ms-3" href='/'>{cardLink}</Link>
        </div>

    );
}
