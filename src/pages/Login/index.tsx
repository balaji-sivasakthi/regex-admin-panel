/** @format */

import { useState } from "react";
import Input from "../../components/Input";

export default function Login() {
   const [agreed, setAgreed] = useState(false);

   return (
      <div className="sm:py-32 lg:px-8 isolate flex items-center px-6 py-24">
         <div className="w-1/3 bg-black">
            <div className="mx-auto max-w-2xl text-center">
               <h2 className="sm:text-4xl text-3xl font-bold tracking-tight text-gray-900">Welcome, Chief!</h2>
               <p className="mt-2 text-lg leading-8 text-gray-600">Log in with your credentials</p>
            </div>
            <form
               action="#"
               method="POST"
               className="sm:mt-20 mx-auto mt-16 max-w-xl">
               <div className="sm:grid-cols-2 grid grid-cols-1 gap-x-8 gap-y-6">
                  <Input
                     label="Email"
                     name="email"
                  />

                  {/* <Switch.Group
                  as="div"
                  className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                     <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                           agreed ? "bg-indigo-600" : "bg-gray-200",
                           "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                        )}>
                        <span className="sr-only">Agree to policies</span>
                        <span
                           aria-hidden="true"
                           className={classNames(
                              agreed ? "translate-x-3.5" : "translate-x-0",
                              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
                           )}
                        />
                     </Switch>
                  </div>
                  <Switch.Label className="text-sm leading-6 text-gray-600">
                     By selecting this, you agree to our{" "}
                     <a
                        href="#"
                        className="font-semibold text-indigo-600">
                        privacy&nbsp;policy
                     </a>
                     .
                  </Switch.Label>
               </Switch.Group> */}
               </div>
               <div className="mt-10">
                  <button
                     type="submit"
                     className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                     Let's talk
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
