import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardContainer: {
        height: '12.25rem',
        padding: '0.5rem 1rem 0',
    },
    card: {
        padding: '0 0 1rem',
        borderRadius: '8px',
        border: 'solid 1px #b8b8b8'
      },
      imagem : {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
      },
    cardTextoDiv: {
        display: "flex",
        justifyContent: 'space-between',
    },
    nomeRestaurante: {
        height: '1.125rem',
        margin: '0.75rem 1rem 0.25rem',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.39px',
        color:'#e8222e',
    },
    tempoDeEntrega: {
        width: '9.25rem',
        height: '1.125rem',
        margin: '0.25rem 0.5rem 0 1rem',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.39px',
        color: '#b8b8b8',
      },
      taxaDeEntrega: {
        width: '8.75rem',
        height: '1.125rem',
        margin: '0.25rem 1rem 0 0.5rem',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        fontWeight:' normal',
        fontStretch:' normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.39px',
        textAlign: 'right',
        color: '#b8b8b8',
      }
  });

  export default useStyles