import React from "react";
import { Field } from "formik";

const inputDate = (props) => <input type="date" {...props} />;

const DateInput = () => {
  return (
    <>
      <Label htmlFor="matchDay" content="En que fecha fuiste?" />
      <Field as={inputDate} name="matchDay" />
    </>
  );
};

export default DateInput;
