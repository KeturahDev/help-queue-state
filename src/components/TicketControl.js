import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: []
    };
  }

  handleAddNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList, formVisibleOnPage: false})
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
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddNewTicketToList}/>
      buttontext = "Return to list"
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList}/>
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