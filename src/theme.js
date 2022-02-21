//import { createTheme } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
//import { purple } from '@material-ui/core/colors';
import { red, purple, lightBlue } from '@mui/material/colors';


const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: lightBlue
    //primary: red
    },
    colors: {
      bgColor: '#3e3e3e',
      bgLightColor: '#888',
      mainAccentColor: '#fecc01'
    }
  });

export default theme;