import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import { contactsFilter } from "./redux/actions/filterAction";
import formSelectors from "./redux/selectors/formSelectors";
import styleApp from "./App.module.css";
import titleStyle from "./reverseTransition.module.css";
import formOperations from "./redux/operations/formOperations.js";

class App extends Component {
  state = {
    showTitle: false,
  };

  componentDidMount() {
    this.props.onFetchContacts();

    this.setState({
      showTitle: true,
    });
  }

  componentDidUpdate(prevState) {}

  render() {
    const { showTitle } = this.state;
    return (
      <div className={styleApp.container}>
        {this.props.isLoading && <h1>LOADING...</h1>}
        <CSSTransition classNames={titleStyle} in={showTitle} timeout={500}>
          <h1 className={styleApp.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm contacts={this.props.items} />

        {this.props.items.length > 1 && <Filter />}

        <h2>Contacts</h2>

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: formSelectors.getItems(state),
    isLoading: formSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  contactsFilter,
  onFetchContacts: formOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
