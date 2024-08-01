'use client'
import BestSellingProducts from "../../../components/BestSellingProduct";
import Header from "../../../components/Header";
import RecentInterest from "../../../components/RecentInterest";

export default function DashboardPage() {
    return (
        <>
            <Header headerName='Dashboard'></Header>
            <div className="flex flex-wrap justify-around">
                <RecentInterest
                    backgroundimage="https://images.pexels.com/photos/9742805/pexels-photo-9742805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    cardHeader="Daily's Revenue"
                    cardContent="32,000.00 Kyats"
                    cardLink="View entire list" />
                <RecentInterest
                    backgroundimage="https://images.pexels.com/photos/390573/pexels-photo-390573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    cardHeader="Weekly's revenue"
                    cardContent="-------"
                    apiLink="http://127.0.0.1:8000/api/interest"
                    cardLink="View entire list" />
                <RecentInterest
                    backgroundimage="https://images.pexels.com/photos/5594266/pexels-photo-5594266.jpeg?auto=compress&cs=tinysrgb&w=600"
                    cardHeader="Monthly's revenue"
                    cardContent="32,000.00 Kyats"
                    cardLink="View entire list" />
                <RecentInterest
                    backgroundimage="https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    cardHeader="Out of Stock"
                    cardContent="56"
                    cardLink="View entire list" />
            </div>
            <div className="flex flex-wrap justify-around">
                <BestSellingProducts tableHeadContent='Best Selling Products (Monthly)' />
                <BestSellingProducts tableHeadContent='Out of Stock Products' />
            </div>
        </>
    )
}