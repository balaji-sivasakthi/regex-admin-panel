/** @format */

import React from "react";

type Props = {
   name: string;
   label: string;
};

function Input({ name, label, ...props }: Props) {
   return (
      <div>
         <label
            htmlFor={name}
            className="block text-sm font-semibold leading-6 text-gray-900">
            {label}
         </label>
         <div className="mt-2.5">
            <input
               {...props}
               autoComplete="given-name"
               className="sm:text-sm sm:leading-6 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
         </div>
      </div>
   );
}

export default Input;
