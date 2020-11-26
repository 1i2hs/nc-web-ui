import * as React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

type SearchTextFieldProps = {
  fullWidth?: boolean;
};

const SearchTextField = ({ fullWidth = false }: SearchTextFieldProps) => {
  const [text, setText] = React.useState("");

  const handleTextChange = (event: React.ChangeEvent<{ value: string }>) => {
    setText(event.target.value);
  };

  const handleClickSearch = () => {
    // TODO: escape text before executing the async operation
    console.log(`${text}`);
  };

  return (
    <OutlinedInput
      placeholder="Search"
      multiline
      fullWidth={fullWidth}
      value={text}
      onChange={handleTextChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            title="search"
            aria-label="Go Search!"
            onClick={handleClickSearch}
          >
            <Icon>search</Icon>
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchTextField;
