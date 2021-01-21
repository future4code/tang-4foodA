import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textField: {
        height: '3.5rem',
        borderRadius: '2px',
        border: 'solid 1px #b8b8b8',
        display: 'flex',
        alignItems:' center',
        padding: '0 0.503rem 0 1.063rem',
        margin: '0 16px',
      },
      input: {
        border: 'none',
        fontFamily:'Roboto',
        height: '3em',
        width: '18em',
        fontSize: '1em',
        "&:focus": {
          outline: 'none',
        }
      },
      searchIcon: {
        color: "#b8b8b8"
      }
})

export default useStyles