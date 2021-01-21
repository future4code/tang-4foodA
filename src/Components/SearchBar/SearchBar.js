import React,{useContext} from 'react'
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import useStyles from './styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import {Search} from "@material-ui/icons"
import GlobalStateContext from "../../Global/GlobalStateContext";
import {goToSearchPage} from "../../Routes/coordinators";

export default function SearchBar(props) {
    
    const history = useHistory();
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
              onClick={props.onclick === "off" ? null : () => goToSearchPage(history)}
              value={states.searchInput} 
              className={classes.input} 
              placeholder={"Restaurantes"}
              onChange={onChangeInput}
              />
          </div>
        </div>
    )
}
