import React from 'react'
import TextField from '@material-ui/core/TextField';
import useStyles from './styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import {Search} from "@material-ui/icons"

export default function SearchBar() {

    const classes = useStyles();

    return (
        <div>
          <div className={classes.textField}>
            <Search className={classes.searchIcon}/>
            <input className={classes.input} placeholder={"Restaurantes"}/>
          </div>
        </div>
    )
}
