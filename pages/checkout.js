import React, { useState } from "react";
import OrderItems from '../components/Checkout/orderItems';
import Service from '../components/Checkout/service';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Checkout = () => {
  const GREEN_600 = "#059669";
  const GRAY_300 = "#D1D5DB";

  const standard = { borderColor: GRAY_300, borderWidth: "" };
  const express = { borderColor: GRAY_300, borderWidth: "" };

  const [standardStyle, setStandardStyle] = useState(standard);
  const [expressStyle, setExpressStyle] = useState(express);


  const toggleStandard = (e) => {
    e.preventDefault();
    console.log(e)
    if (standardStyle.borderColor == GRAY_300 && expressStyle.borderColor == GRAY_300) {
      setStandardStyle({ borderColor: GREEN_600, borderWidth: "2px" });
    } else if (standardStyle.borderColor == GREEN_600 && expressStyle.borderColor == GRAY_300) {
      setStandardStyle({ borderColor: GRAY_300, borderWidth: "" });
    } else if (standardStyle.borderColor == GRAY_300 && expressStyle.borderColor == GREEN_600) {
      setStandardStyle({ borderColor: GREEN_600, borderWidth: "2px" });
      setExpressStyle({ borderColor: GRAY_300, borderWidth: "" });
    }
  }

  const toggleExpress = (e) => {
    e.preventDefault();
    console.log(e)
    if (standardStyle.borderColor == GRAY_300 && expressStyle.borderColor == GRAY_300) {
      setExpressStyle({ borderColor: GREEN_600, borderWidth: "2px" });
    } else if (standardStyle.borderColor == GRAY_300 && expressStyle.borderColor == GREEN_600) {
      setExpressStyle({ borderColor: GRAY_300, borderWidth: "" });
    } else if (standardStyle.borderColor == GREEN_600 && expressStyle.borderColor == GRAY_300) {
      setExpressStyle({ borderColor: GREEN_600, borderWidth: "2px" });
      setStandardStyle({ borderColor: GRAY_300, borderWidth: "" });
    }
  }

  return (
    <div class="my-24">
      <div className="border border-gray-200 bg-gray-50 flex flex-col md:flex md:flex-row max-w-screen-xl mx-auto rounded-md">
        <div className="md:w-1/2 m-7">
          {/****************************************** LEFT COLUMN ******************************************/}
          <div className="flex flex-col md:flex md:flex-col">
            <span>
              <h2 className="font-medium text-lg text-gray-800">Contact information</h2>
            </span>
            <form onSubmit={e => e.preventDefault()} method="POST">
              <div>
                <div className="py-3 pt-5">
                  <label forHtml="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Email address
                  </label>
                  <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="email" id="email" type="email" />
                </div>
                <hr className="my-5 " />
                <span>
                  <h2 className="font-medium text-lg text-gray-800 mb-5">Shipping information</h2>
                </span>
                <div className="pb-5 flex flex-col md:grid md:grid-rows-2 lg:grid-rows-1 md:grid-flow-col md:gap-4">
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
              <div className="pb-5 flex flex-col md:grid md:grid-rows-1 md:grid-flow-col gap-4">
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
              <div className="pb-5 flex flex-col md:grid md:grid-rows-2 lg:grid-rows-1 md:grid-flow-col gap-4">
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
              <hr className="my-5" />
              <div>
                <span>
                  <h2 className="font-medium text-lg text-gray-800 mb-5">Delivery method</h2>
                </span>
                <ul className="grid grid-rows-1 grid-flow-col gap-4">
                  <li>
                    <button onClick={e => toggleStandard(e)} style={{ borderColor: standardStyle.borderColor, borderWidth: standardStyle.borderWidth }} className="border border-gray-300 bg-white rounded-md p-3 text-left w-full group">
                      <ul>
                        <li className="block text-gray-700 text-sm font-semibold flex justify-between">Standard
                          <CheckCircleIcon className="w-5 h-5" style={{ color: standardStyle.borderColor }} />
                        </li>
                        <li className="block text-gray-500 text-sm font-normal">4-10 business days</li>
                        <li className="mt-4 text-gray-700 text-sm font-semibold">$5.00</li>
                      </ul>
                    </button>
                  </li>
                  <li>
                    <button onClick={e => toggleExpress(e)} style={{ borderColor: expressStyle.borderColor, borderWidth: expressStyle.borderWidth }} className="border border-gray-300 bg-white rounded-md p-3 text-left w-full group">
                      <ul>
                        <li className="block text-gray-700 text-sm font-semibold flex justify-between">Express
                          <CheckCircleIcon className="w-5 h-5" style={{ color: expressStyle.borderColor }} />
                        </li>
                        <li className="block text-gray-500 text-sm font-normal">2-5 business days</li>
                        <li className="mt-4 text-gray-700 text-sm font-semibold">$16.00</li>
                      </ul>
                    </button>
                  </li>
                </ul>
              </div>
              <hr className="bg-green-500 my-10" />
              <div>
                <span>
                  <h2 className="font-medium text-lg text-gray-800 pb-3">Payment</h2>
                  <div>
                    <ul className="sm:flex pb-5">
                      <li className="my-4 sm:my-0 sm:mr-8">
                        <label className="text-gray-700 text-xs sm:text-sm font-semibold ">
                          <input className="border-gray-300 focus:ring-0 form-radio text-green-500" type="radio" name="radio-direct" value="credit" />
                          <span class="ml-2">Credit Card</span>
                        </label>
                      </li>
                      <li className="my-4 sm:my-0 sm:mr-8">
                        <label className="text-gray-700 text-xs sm:text-sm font-semibold ">
                          <input className="border-gray-300 focus:ring-0 form-radio text-green-500" type="radio" name="radio-direct" value="paypal" />
                          <span class="ml-2">PayPal</span>
                        </label>
                      </li>
                      <li className="my-4 sm:my-0 sm:mr-8">
                        <label className="text-gray-700 text-xs sm:text-sm font-semibold ">
                          <input className="border-gray-300 focus:ring-0 form-radio text-green-500" type="radio" name="radio-direct" value="etransfer" />
                          <span class="ml-2">eTransfer</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <div className="pb-5">
                          <label forHtml="cardNumber" className="block text-gray-700 text-sm font-semibold mb-2">
                            Card Number
                          </label>
                          <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="cardNumber" id="cardNumber" type="text" />
                        </div>
                      </li>
                      <li>
                        <div className="pb-5">
                          <label forHtml="address" className="block text-gray-700 text-sm font-semibold mb-2">
                            Name on card
                          </label>
                          <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="cardName" id="cardName" type="text" />
                        </div>
                      </li>
                      <li className="flex">
                        <div className="pb-5 w-3/4 pr-3">
                          <label forHtml="address" className="block text-gray-700 text-sm font-semibold mb-2">
                            Expiration data (MM/YY)
                          </label>
                          <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="expirationDate" id="expirationDate" type="text" />
                        </div>
                        <div className="pb-5 w-1/4">
                          <label forHtml="address" className="block text-gray-700 text-sm font-semibold mb-2">
                            CVC
                          </label>
                          <input className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md" name="cvc" id="cvc" type="text" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-3/5">
          <div>
            {/****************************************** RIGHT COLUMN ******************************************/}
            <div className="p-7 md:p-3 lg:p-7">
              <span>
                <h2 className="font-medium text-lg text-gray-800 mb-5">Order summary</h2>
              </span>
              <div className="rounded-md bg-white border border-gray-200 h-full">
                <OrderItems />
                <Service />
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
}



export default Checkout;