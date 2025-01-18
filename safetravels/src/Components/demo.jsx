import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup({btnSouthern,btnWestern,btnEastern}) {
  return (
    <div className='btnProvinces'>
      <ButtonGroup size='large' variant="outlined" aria-label="Basic button group">
        <Button onClick={btnSouthern}>Southern Province</Button>
        <Button onClick={btnWestern}>Western Province</Button>
        <Button onClick={btnEastern}>Eastern Province</Button>
      </ButtonGroup>
    </div>
    
  );
}
