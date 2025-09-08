import Switch from "@mui/material/Switch";
import React from "react";
import { ShowTOPageUrl } from "../../helpers/urls";
import { fetchById } from "../../helpers/actions";
import { toast } from "react-toastify";
export default function ActiveInactiveSwitch({ value, id }) {
  const [checked, setChecked] = React.useState(value);
  const activeProfile = async () => {
    try {
      const response = await fetchById(`${ShowTOPageUrl}/${id}`);
      if (response.status) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  };

  const handleChange = (event) => {
    const value = event.target.checked;
    setChecked(value);
    activeProfile();
  };

  return <Switch checked={checked} onChange={handleChange} />;
}
