import Switch from "@mui/material/Switch";
import React, { useEffect } from "react";
import { toggleActive } from "../../helpers/urls";
import axios from "axios";
export default function ActiveInactiveSwitch({ value, id }) {
  const [checked, setChecked] = React.useState(value);
  console.log("valee", value);
  const activeProfile = async () => {
    try {
      const response = await axios.get(`${toggleActive}/${id}`);
      if (response.data.status) {
        console.log("success", response.data.message);
      } else {
        setError("Error to update Profile");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const value = event.target.checked;
    setChecked(value);
    console.log("valueee", value);
    activeProfile();
  };

  return <Switch checked={checked} onChange={handleChange} />;
}
