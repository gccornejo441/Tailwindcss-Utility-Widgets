import { TrashIcon } from '@heroicons/react/solid';
import { shirts } from "../mockdata/shirts";

const OrderItems = () => {

    return (
        <>
            {shirts.map((item) => {
                return (
                    <div className="border-b border-gray-200 p-5 grid grid-rows-1 grid-flow-col">
                        <ul key={item.key} className="flex flex-row">
                            <li>
                                <img src={item.image} alt="item to purchase" className="w-20 h-24" />
                            </li>
                            <li className="ml-5">
                                <ul>
                                    <li className="text-sm font-semibold text-gray-600">
                                        {item.shirt_type}
                                    </li>
                                    <li className="text-sm text-gray-500">
                                        {item.color}
                                    </li>
                                    <li className="text-sm text-gray-500">
                                        {item.size}
                                    </li>
                                </ul>
                                <ul>
                                    <li className="text-sm pt-4 font-semibold">
                                        {item.price}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex flex-row-reverse">
                            <div className="grid grid-rows-1 ">
                                <li className="flex flex-row-reverse">
                                    <TrashIcon className="w-5 h-5 text-gray-400" />
                                </li>
                                <li className="">
                                    <form action="#" method="POST" className="grid grid-rows-1 border border-gray-300 rounded-md px-1">
                                        <select name="numberOfItems" id="numberOfItems" className="text-sm text-gray-600 py-1 pr-3">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </form>
                                </li>
                            </div>
                        </ul>
                    </div>
                );
            })}
        </>
    );
}

export default OrderItems;