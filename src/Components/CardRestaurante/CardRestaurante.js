import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles.js'

export default function CardRestaurante(props) {

    const classes = useStyles();

    return (
        <div className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <CardMedia
              className={classes.imagem}
              component="img"
              alt={props.title}
              height="120"
              image={props.img? props.img :'https://picsum.photos/200'}
              title={props.title}
            />

              <h2 className={classes.nomeRestaurante}>
                {props.nome? props.nome : "Restaurante"}
              </h2>
              <div className={classes.cardTextoDiv}>
                <p className={classes.tempoDeEntrega}>
                    {props.tempoDeEntrega} min 
                </p>
                <p className={classes.taxaDeEntrega}>
                    {props.frete? props.frete : "Frete Grátis"}
                </p>
              </div>

          </div>
        </div>
       </div> 
      );
    }