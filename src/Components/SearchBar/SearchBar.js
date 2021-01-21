import React,{useContext} from 'react'
import { useHistory } from "react-router-dom";
import useStyles from './styles'
import {Search} from "@material-ui/icons"
import GlobalStateContext from "../../Global/GlobalStateContext";
import {goToSearchPage} from "../../Routes/coordinators";

export default function SearchBar(props) {
    
    const history = useHistory();
    const {states, setters} = useContext(GlobalStateContext)
    const classes = useStyles();

    const onChangeInput = (event) => {
      setters.setSearchInput(event.target.value)
    }

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
