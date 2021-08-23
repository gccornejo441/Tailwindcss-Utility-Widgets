import Link from 'next/link';
import OrderItems from '../components/orderItems';

export default () => (
  <div>
    <div className="border-2 border-red-500 flex max-w-screen-xl mx-auto">
      <div className="border-2 border-blue-500 bg-gray-50 w-1/2 m-7">
        Left
        {/****************************************** LEFT COLUMN ******************************************/}
        <div className="border-2 border-green-500">
          <h2 className="text-2xl font-semibold" >Contact information</h2>
          <form action="#" method="POST">
            <div class="divide-y divide-gray-200 divide-solid">
              <div className="py-5">
                <label forHtml="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email address
                </label>
                <input className="w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="email" id="email" type="email" />
              </div>
              <div className="py-5 grid grid-rows-1 grid-flow-col gap-4">
                <div class="flex flex-col w-auto">
                  <label forHtml="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
                    First name
                  </label>
                  <input className="mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="firstName" id="firstName" type="text" />
                </div>
                <div className="flex flex-col">
                  <label forHtml="lastName" className="block text-gray-700 text-sm font-semibold mb-2">
                    Last name
                  </label>
                  <input className="mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="lastName" id="lastName" type="text" />
                </div>
              </div>
            </div>
            <div className="pb-5">
              <label forHtml="company" className="block text-gray-700 text-sm font-semibold mb-2">
                Company
              </label>
              <input className="w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="company" id="company" type="text" />
            </div>
            <div className="pb-5">
              <label forHtml="address" className="block text-gray-700 text-sm font-semibold mb-2">
                Address
              </label>
              <input className="w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="address" id="address" type="text" />
            </div>
            <div className="pb-5">
              <label forHtml="apartment" className="block text-gray-700 text-sm font-semibold mb-2">
                Apartment, suite, etc.
              </label>
              <input className="w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="apartment" id="apartment" type="text" />
            </div>
            <div className="pb-5 grid grid-rows-1 grid-flow-col gap-4">
                <div class="flex flex-col">
                  <label forHtml="city" className="block text-gray-700 text-sm font-semibold mb-2">
                    City
                  </label>
                  <input className="mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="city" id="city" type="text" />
                </div>
                <div className="flex flex-col">
                  <label forHtml="country" className="block text-gray-700 text-sm font-semibold mb-2">
                    Country
                  </label>
                  <input className="mt-1 focus:ring-gray-400 focus:border-gray-400 block sm:text-sm md:text-2xl border border-gray-300 rounded-md" name="country" id="country" type="text" />
                </div>
              </div>
          </form>
        </div>
      </div>
      <div className="border-2 border-yellow-600 w-1/2">
        <div className="border-2 border-blue-600 bg-gray-50">
          Right
          {/****************************************** RIGHT COLUMN ******************************************/}
          <div className="border-2 border-green-500 p-7">
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


