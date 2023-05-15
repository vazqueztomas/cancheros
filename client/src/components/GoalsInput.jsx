import React from "react";
import { Field } from "formik";

const GoalsInput = ({ name }) => {
  return (
    <Field
      type="number"
      name={name}
      class="w-9 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
    />
  );
};

export default GoalsInput;
