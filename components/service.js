const Service = () => {
    return (
        <>
            <div className="text-sm p-5 text-gray-700">
                <ul className="flex justify-between pb-5">
                    <li>Subtotal</li>
                    <li className="font-medium">$64.00</li>
                </ul>
                <ul className="flex justify-between pb-5">
                    <li>Shipping</li>
                    <li className="font-semibold">$5.00</li>
                </ul>
                <ul className="flex justify-between pb-5">
                    <li>Taxes</li>
                    <li className="font-semibold">$5.52</li>
                </ul>
                <hr/>
                <ul className="flex justify-between py-5 text-lg font-medium">
                    <li>Total</li>
                    <li>$75.52</li>
                </ul>
            </div>
        </>
    );
}

export default Service;