import { Autocomplete, TextField } from "@mui/material";
import { airports, countries, timezones } from "../helpers/dropdowns";

export default function Input({ qNum, input, handleChange }) {
  if (typeof input === "number") input = input.toString();

  if (qNum === 0)
    return (
      <Autocomplete
        inputValue={input}
        onInputChange={handleChange}
        id="dropdown-timezone"
        options={timezones}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select a timezone" />
        )}
      />
    );
  else if (qNum === 1 || qNum === 3 || qNum === 4)
    return (
      <Autocomplete
        inputValue={input}
        onInputChange={handleChange}
        id="dropdown-airportid"
        options={airports}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select an airport" />
        )}
      />
    );
  else if (qNum === 2 || qNum === 5)
    return (
      <Autocomplete
        inputValue={input}
        onInputChange={handleChange}
        id="dropdown-country"
        options={countries}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select a country" />
        )}
      />
    );
  return <div />;
}
