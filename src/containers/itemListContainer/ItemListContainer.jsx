import { ItemList } from '../../components/';
import { useParams } from 'react-router-dom';
import { RotatingLines } from "react-loader-spinner";
import { useGetFirebaseData } from '../../customHooks';

const ItemListContainer = (Props) => {
    const {categoryId} = useParams()
    const [data, error, loading] = useGetFirebaseData(categoryId)

    return (
        <>
        {(data.length && !loading && !error) ?
        <div className='p-4 md:p-12 bg-slate-500 w-full itemListContainer' ref={Props.refProp}>
            <ItemList products={data}/>
        </div>
        : error ? 
        <div className='p-12 bg-slate-500 w-full itemListContainer flex flex-col items-center justify-start'>
            <div className="bg-slate-200 rounded-md py-20 px-24 mt-10 sm:w-full w-min">
                <h1 className='text-center p-4'>{error}</h1>
            </div>
        </div>
        : <div className='p-12 bg-slate-500 w-full itemListContainer flex flex-col items-center justify-start'>
            <div className="bg-slate-200 rounded-md py-20 px-24 mt-10 sm:w-full w-min">
                <div className='grid place-items-center'>
                    <RotatingLines
                        strokeColor="#ff7c1a"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            </div>
        </div>}
        </>
    )
}

export default ItemListContainer;