import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetState = () => {
    setForm(initialState);
  };

  const handleFormErrors = (errors) => {
    setForm({ ...form, errors });
  };

  return [form, handleInputChange, resetState, handleFormErrors];
};

export default useForm;
