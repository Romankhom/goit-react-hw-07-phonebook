import React from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styleApp from "../../App.module.css";
import titleStyle from "../../reverseTransition.module.css";
import ListItem from "../ListItem/ListItem";
import formSelectors from "../../redux/selectors/formSelectors";

const ContactList = ({choosenItems}) => { 
    return (
      <TransitionGroup component="ul" className={styleApp.contactsList}>
        {choosenItems.length > 0 &&
          choosenItems.map(({id}) => (
            <CSSTransition key={id} classNames={titleStyle} timeout={500}>
              <ListItem id={id}/>          
            </CSSTransition>
          ))}
      </TransitionGroup>
    );
}

const mapStateToProps = (state) => ({  
    choosenItems: formSelectors.getChoosenItems(state
      )
  
});

export default connect(mapStateToProps)(ContactList);
