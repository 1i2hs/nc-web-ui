import * as React from "react";

const data = {
  loading: false,
  setLoading: (loadingState: boolean) => {},
};

const Context = React.createContext(data);

export default Context;
