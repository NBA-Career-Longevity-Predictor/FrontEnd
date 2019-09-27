import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

let Estimate = props =>{

    console.log(props.props)

    const [state, setState] = useState({estimate: ''})

   let longevity = e => {
        e.preventDefault();
        axiosWithAuth()
          .post(`https://nba-project.herokuapp.com/api`,
            props.props
          )
          .then(res => {
            console.log("hello");
            console.log(res.data);
            setState({estimate: res.data.results.y_pred})
          })
          .catch(err => console.log("DSssss",err));
      };

    console.log("Estimate", props)
    return(
        <div>
            <button onClick={longevity}>Career Expected Longevity</button>
            {state.estimate && <p>{state.estimate}</p>}
        </div>

    )
};

export default Estimate;