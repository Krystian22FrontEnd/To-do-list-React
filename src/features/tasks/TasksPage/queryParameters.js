import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const useQueryParameter = (paramName) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(paramName);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value === undefined || value === null || value === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
