import React from "react";
import { Field } from "formik";
import Label from "./Label";

const inputDate = props => <input type="date" {...props} />;

const DateInput = () => {
  return (
    <>
      <Label htmlFor="matchDay" content="En que fecha fuiste?" />
      <Field
        as={inputDate}
        name="matchDay"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
      />
    </>
  );
};

export default DateInput;
