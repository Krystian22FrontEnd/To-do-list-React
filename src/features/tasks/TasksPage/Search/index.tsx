import { Wrapper } from "./styled";
import { SearchInput } from "../../SearchInput";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { ChangeEventHandler } from "react";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter()
  const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    })
  };

  return (
    <Wrapper>
        <SearchInput
      placeholder="Filtruj zadania"
      value={query || ""}
      onChange={onInputChange}
      />
    </Wrapper>
  );
};