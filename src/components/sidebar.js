import React from 'react';
import { Button } from '@material-ui/core';
//import CustomCheckbox from '@material-ui/core';


function Sidebar() {

  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Button color="secondary" variant="contained">
        mybutton
      </Button>
      {/* <CustomCheckbox defaultChecked /> */}
    </div>
  );
}

export default Sidebar;
