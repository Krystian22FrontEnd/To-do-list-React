import { useLocation, useHistory } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const useQueryParameter = (paramName: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(paramName);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  interface QueryParams {
    key: typeof searchQueryParamName;
    value?: string;
  }

  return ({ key, value }: QueryParams) => {
    if (!value || value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value.trim());
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
