//import { createTheme } from '@material-ui/core/styles';
import { createTheme } from '@mui/material';
//import { purple } from '@material-ui/core/colors';
import { red, purple, lightBlue } from '@mui/material/colors';


const theme = createTheme({
    palette: {
      primary: {
        main: red[50],
      },
      secondary: lightBlue
    //primary: red
    },
    colors: {
      bgColor: '#3e3e3e',
      bgLightColor: '#888',
      mainAccentColor: '#fecc01'
    },
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 19,
              color: "blue"
            }
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 10,
              color: "orange",
              background: "pink"
            }
          }
        ],
      }
    }
    
    
  });

export default theme;