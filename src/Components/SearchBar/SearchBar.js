import React,{useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import useStyles from './styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import {Search} from "@material-ui/icons"
import GlobalStateContext from "../../Global/GlobalStateContext";

export default function SearchBar() {

    const {states, setters} = useContext(GlobalStateContext)
    const classes = useStyles();

    const onChangeInput = (event) => {

      setters.setSearchInput(event.target.value)
      console.log(event.target.value)
      console.log(states.searchInput)
    }
    console.log(states)
    return (
        <div>
          <div className={classes.textField}>
            <Search className={classes.searchIcon}/>
            <input 
              value={states.searchInput} 
              className={classes.input} 
              placeholder={"Restaurantes"}
              onChange={onChangeInput}
              />
          </div>
        </div>
    )
}
