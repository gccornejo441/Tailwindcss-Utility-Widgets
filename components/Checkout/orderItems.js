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
                                <img src={item.image} alt="item to purchase" className="w-16 h-20 lg:w-20 lg:h-24 md:w-16 md:h-20" />
                            </li>
                            <li className="ml-5">
                                <ul>
                                    <li className="text-sm md:text-xs lg:text-sm font-semibold text-gray-600">
                                        {item.shirt_type}
                                    </li>
                                    <li className="text-sm md:text-xs lg:text-sm text-gray-500">
                                        {item.color}
                                    </li>
                                    <li className="text-sm md:text-xs lg:text-sm text-gray-500">
                                        {item.size}
                                    </li>
                                </ul>
                                <ul>
                                    <li className="text-sm md:text-xs lg:text-sm pt-4 font-semibold">
                                        {item.price}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex flex-row-reverse">
                            <div className="grid grid-rows-1 ">
                                <li className="flex flex-row-reverse">
                                    <TrashIcon className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-gray-400" />
                                </li>
                                <li>
                                    <form action="#" method="POST" className="grid grid-rows-1 rounded-md">
                                        <select name="numberOfItems" id="numberOfItems" className="border-transparent focus:border-gray-500 focus:ring-0 text-sm md:text-xs lg:text-sm text-gray-600 form-select block w-full rounded-md border border-gray-300">
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