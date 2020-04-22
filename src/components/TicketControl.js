import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttontext = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm/>
      buttontext = "Return to list"
    } else {
      currentlyVisibleState = <TicketList/>
      buttontext = "Add ticket"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttontext}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;