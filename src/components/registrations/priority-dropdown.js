import React from "react";
import { SetPriorityUrl, ShowTOPageUrl } from "../../helpers/urls";
import { fetchById, postData } from "../../helpers/actions";
import { toast } from "react-toastify";

export default function PriorityDropdown({ value, id }) {
  const [priority, setPriority] = React.useState(value);

  const updatePriority = async (newValue) => {
    try {
      const data = {
        value: newValue,
        therapistId: id,
      };
      const response = await postData(SetPriorityUrl, data);
      if (response.status) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setPriority(newValue);
    updatePriority(newValue);
  };

  return (
    <select
      value={priority}
      onChange={handleChange}
      style={{ padding: "5px", borderRadius: 4, width: 50, outline: "none" }}
    >
      <option value={0}>0</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
  );
}
