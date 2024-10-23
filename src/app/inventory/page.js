'use client'
import Header from "../../../components/Header";
import InventoryTable from "../../../components/InventoryTable";

export default function Inventory(){
    return(
        <>
            <Header headerName='Inventory'></Header>
            <InventoryTable></InventoryTable>
        </>
    )
}