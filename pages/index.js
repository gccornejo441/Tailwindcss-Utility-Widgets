import Link from 'next/link';
import OrderItems from '../components/orderItems';

export default () => (
  <div>
    <div className="border-2 border-red-500 grid grid-rows-1 grid-flow-col">
      <div className="border-2 border-blue-500 bg-gray-50">
        Left
        {/****************************************** LEFT COLUMN ******************************************/}
        <div className="border-2 border-green-500 h-96 p-7">
          <h2>Contact information</h2>
          <form action="#" method="POST">
            <div class="divide-y divide-gray-200 divide-solid">
              <div className="py-8">
                <label forHtml="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email address
                </label>
                <input className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border border-gray-300 rounded-sm" name="email" id="email" type="email" />
              </div>
              <div className="py-8 grid grid-rows-1 grid-flow-col gap-4">
                <div class="flex flex-col">
                  <label forHtml="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
                    First name
                  </label>
                  <input className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border border-gray-300 rounded-sm" name="firstName" id="firstName" type="text" />
                </div>
                <div className="flex flex-col">
                  <label forHtml="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
                    First name
                  </label>
                  <input className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border border-gray-300 rounded-sm" name="firstName" id="firstName" type="text" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="border-2 border-yellow-600">
        <div className="border-2 border-red-300 bg-gray-50">
          Right
          {/****************************************** RIGHT COLUMN ******************************************/}
          <div className="border-2 border-green-500 h-96 p-7">
            <h2>Order summary</h2>
            <div className="rounded-md bg-white h-96 border border-gray-200">
              <OrderItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


