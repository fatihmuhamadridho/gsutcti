import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    width: "40px",
    position: "relative",
    backgroundColor: "#0D1117",
    fontSize: 14,
    color: "white",
    display: "flex",
    padding: "0px !important",
  },
}));

const MenuItemSX = {
    margin: "0px",
    padding: "3px 15px 3px 5px",
    display: "flex",
    backgroundColor: "#0D1117 !important",
    fontSize: "14px",
    color: "white",
    borderBottom: "1px solid black",
}

export default function SelectMUI({ rowSelect, setRowSelect, rowSelectHandleChange }: any) {
  // console.log("rowSelect", rowSelect)
  return (
    <div className='flex items-center space-x-3'>
        <p>Rows per page:</p>
      <FormControl variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={rowSelect}
          onChange={rowSelectHandleChange}
          input={<BootstrapInput />}
          IconComponent={() => null}
          MenuProps={{
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "left",
            },
            MenuListProps: {
                disablePadding: true,
                sx: { backgroundColor: "#0D1117" }
            }
          }}
        >
          <MenuItem sx={MenuItemSX} value={5}>5</MenuItem>
          <MenuItem sx={MenuItemSX} value={10}>10</MenuItem>
          <MenuItem sx={MenuItemSX} value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
