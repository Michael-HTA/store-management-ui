import { useRouter } from 'next/navigation';

export default function AddProduct(props){
    const {buttonName,link} = props;

    const route = useRouter();
    const handleClick = () => {
        route.push(link);
    }
    return(
        <>
            <button type="button" onClick={handleClick} className="hover:bg-slate-700 bg-slate-600 text-sm font-semibold text-white p-1 rounded">{buttonName}</button>
        </>
    )
}