import * as React from "react";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { createSearchParams, useNavigate } from "react-router-dom";

const Input = styled("input")(({ theme }) => ({
  padding: "6px",
  backgroundColor: "#161B22",
  border: "1px solid black",
  borderRadius: "4px",
  color: "white",
  outline: "none",
  fontSize: "14px"
}));

const Listbox = styled("ul")(({ theme }) => ({
  margin: 0,
  zIndex: 1,
  listStyle: "none",
  backgroundColor: "#161B22",
  overflow: "auto",
  fontSize: "14px",
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function AutoCompleteMUI({
  searchHandleChange,
  searchInput,
  isLoading,
  allState,
}: any) {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: allState?.search?.search?.items,
  });

  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    navigate({
      pathname: `/search`,
      search: createSearchParams({
        q: searchInput,
      }).toString()
    });
    console.log("submit");
  };

  return (
    <form className="mb:w-full sm:w-auto" onSubmit={onSubmit}>
      <div {...getRootProps()}>
        <Input
          className="ease-in-out duration-300 mb:!w-full mb:focus:!w-full sm:position-absolute sm:w-[300px] sm:focus:!w-[380px]"
          placeholder="Search or jump to..."
          {...getInputProps()}
          onChange={searchHandleChange}
          value={searchInput}
        />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox className="w-full max-w-[465px] border-[black] border-[1px] rounded-[8px] space-y-3 sm:absolute sm:w-[380px]" {...getListboxProps()}>
          {searchInput.length > 0 ? !allState.search.isLoading && !isLoading ? (
            allState?.search?.search?.items?.map((item: any, index: any) => {
              if (index < 5) {
                return (
                  <li className="p-2 w-full border-b-[1px] border-[black] cursor-pointer" key={index}>
                    {item.full_name}
                  </li>
                );
              }

              return null;
            })
          ) : (
            <div>Loading...</div>
          ) : null}
        </Listbox>
      ) : null}
    </form>
  );
}