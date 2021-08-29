import Link from 'next/link';
import OrderItems from '../components/orderItems';
import Service from '../components/service';

export default () => (
  <div class="mt-24">
    <div className="border border-gray-200 bg-gray-100 flex max-w-screen-xl mx-auto rounded-md">
      <div className="border-2 border-blue-500 bg-gray-50 w-1/2 m-7">
        Left
        {/****************************************** LEFT COLUMN ******************************************/}
        <div className="border-2 border-green-500">
          <h2 className="text-lg font-semibold" >Contact information</h2>
          <form onSubmit={e => e.preventDefault()} method="POST">
            <div class="divide-y divide-gray-200 divide-solid">
              <div className="py-5">
                <label forHtml="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email address
                </label>
                <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="email" id="email" type="email" />
              </div>
              <div className="py-5 grid grid-rows-1 grid-flow-col gap-4">
                <div class="flex flex-col w-auto">
                  <label forHtml="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
                    First name
                  </label>
                  <input className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="firstName" id="firstName" type="text" />
                </div>
                <div className="flex flex-col">
                  <label forHtml="lastName" className="block text-gray-700 text-sm font-semibold mb-2">
                    Last name
                  </label>
                  <input className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="lastName" id="lastName" type="text" />
                </div>
              </div>
            </div>
            <div className="pb-5">
              <label forHtml="company" className="block text-gray-700 text-sm font-semibold mb-2">
                Company
              </label>
              <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="company" id="company" type="text" />
            </div>
            <div className="pb-5">
              <label forHtml="address" className="block text-gray-700 text-sm font-semibold mb-2">
                Address
              </label>
              <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="address" id="address" type="text" />
            </div>
            <div className="pb-5">
              <label forHtml="apartment" className="block text-gray-700 text-sm font-semibold mb-2">
                Apartment, suite, etc.
              </label>
              <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="apartment" id="apartment" type="text" />
            </div>
            <div className="pb-5 grid grid-rows-1 grid-flow-col gap-4">
                <div class="flex flex-col">
                  <label forHtml="city" className="block text-gray-700 text-sm font-semibold mb-2">
                    City
                  </label>
                  <input className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="city" id="city" type="text" />
                </div>
                <div className="flex flex-col">
                  <label forHtml="country" className="block text-gray-700 text-sm font-semibold mb-2">
                    Country
                  </label>
                  <select className="mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md p-1 pr-16 text-gray-500" name="country" id="country">
                    <option value="united_states">United States</option>
                    <option value="china">China</option>
                  </select>
                </div>
              </div>
              <div className="pb-5 grid grid-rows-1 grid-flow-col gap-4">
                <div class="flex flex-col w-auto">
                  <label forHtml="province" className="block text-gray-700 text-sm font-semibold mb-2">
                    Province
                  </label>
                  <input className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="province" id="province" type="text" />
                </div>
                <div className="flex flex-col">
                  <label forHtml="postal" className="block text-gray-700 text-sm font-semibold mb-2">
                    Postal code
                  </label>
                  <input className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="postal" id="postal" type="text" />
                </div>
              </div>
              <div className="pb-5">
              <label forHtml="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                Phone
              </label>
              <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="phone" id="phone" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>
            <hr className="my-5"/>
            <div>
              <span>
                <h2 className="font-medium text-lg text-gray-700 mb-5">Delivery method</h2>
              </span>
              <ul className="grid grid-rows-1 grid-flow-col gap-4">
                <li>
                  <button className="border border-gray-300 rounded-md p-3 group focus:bg-yellow-600 ">
                    <ul>
                      <li className="block text-gray-700 text-sm font-semibold group-focus:text-yellow-300">Standard</li>
                      <li className="block text-gray-500 text-sm font-normal">4-10 business days</li>
                      <li className="mt-4 text-gray-700 text-sm font-semibold">$5.00</li>
                    </ul>
                  </button>
                </li>
                <li>
                <div className="border border-gray-300 rounded-md p-3">
                    <ul>
                      <li className="block text-gray-700 text-sm font-semibold">Express</li>
                      <li className="block text-gray-500 text-sm font-normal">2-5 business days</li>
                      <li className="mt-4 text-gray-700 text-sm font-semibold">$16.00</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <hr className="my-10"/>
            <div>
              <span>
                <h2 className="font-medium text-lg text-gray-700">Payment</h2>
                <ul>
                  <li>
                    <div>
                      <ul className="flex">
                        <li className="mr-8">
                          <label className="text-gray-700 text-sm font-semibold ">
                          <input className="form-radio" type="radio" name="radio-direct" value="credit" />
                            <span class="ml-2">Credit Card</span>
                          </label>
                        </li>
                        <li className="mr-8">
                          <label className="text-gray-700 text-sm font-semibold ">
                          <input className="form-radio" type="radio" name="radio-direct" value="paypal" />
                            <span class="ml-2">PayPal</span>
                          </label>
                        </li>
                        <li className="mr-8">
                          <label className="text-gray-700 text-sm font-semibold ">
                          <input className="form-radio text-red-500 border-0" type="radio" name="radio-direct" value="etransfer" />
                            <span class="ml-2">eTransfer</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="border-2 border-yellow-600 w-1/2">
        <div className="border-2 border-blue-600 bg-gray-50">
          Right
          {/****************************************** RIGHT COLUMN ******************************************/}
          <div className="border-2 border-green-500 p-7">
            <h2 className="mb-5 text-lg font-semibold text-gray-800">Order summary</h2>
            <div className="rounded-md bg-white border border-gray-200 h-full">
              <OrderItems />
              <Service/>
              <div className="border-t p-5 flex justify-center">
                <button className="bg-green-600 hover:bg-green-500 text-gray-100 w-full py-3 rounded-md tracking-wide">Confirm order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


