import React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ txtClassName, txtValue }) {
  return (
    <div className={txtClassName}>
      <TextField id="outlined-basic" value={txtValue} variant="outlined" />
    </div>
  );
}
