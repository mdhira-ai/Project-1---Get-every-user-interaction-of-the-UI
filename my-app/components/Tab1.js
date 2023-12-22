import { FaSearch } from "react-icons/fa";
import ShoppingSection from "./ShoppingSection";


const Tab1 = () => {
    return (
        <>
            <div className='flex mt-4 sticky  top-0 flex-row justify-between items-center gap-10 bg-[#F1F1F1] rounded-md   h-12  '>
                <input
                    placeholder="search"
                    type="text"
                    name="search"
                    className="outline-none w-full text-xl bg-transparent p-4"


                />

                <button className="p-3 hover:bg-gray-200 rounded-lg m-2 outline-none">
                    <FaSearch />

                </button>



            </div>

            <ShoppingSection/>
            
        </>
    );
}

export default Tab1;