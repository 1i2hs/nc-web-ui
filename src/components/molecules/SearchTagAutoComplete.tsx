import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
} from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      '&&[class*="MuiOutlinedInput-root"]': {
        paddingLeft: 12,
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  })
);

type SearchTagAutoCompleteProps = {
  data: Array<string>;
  isLoading?: boolean;
  onChangeTagSelection?: (
    event: React.ChangeEvent<{}>,
    selection: Array<string>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => void;
  selection?: Array<string>;
  style?: React.CSSProperties;
};

const SearchTagAutoComplete = ({
  data = [],
  isLoading = false,
  onChangeTagSelection = () => {},
  selection = [],
  style = {},
}: SearchTagAutoCompleteProps) => {
  const classes = useStyles();

  return (
    <Autocomplete
      classes={{ inputRoot: classes.inputRoot }}
      multiple
      options={data}
      value={selection}
      loading={isLoading}
      getOptionLabel={(option) => option}
      filterSelectedOptions
      onChange={onChangeTagSelection}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Search tags" />
      )}
      style={style}
    />
  );
};

export default SearchTagAutoComplete;
