import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
// import { addContact } from "../../redux/actions/formAction";
import  formOperations  from "../../redux/operations/formOperations";
import formStyle from "./ContactForm.module.css";
import "./ContactForm.css";
import formSelectors from "../../redux/selectors/formSelectors";

class ContactForm extends Component {
  formInitialState = {
    name: "",
    number: "",
    sameName: false,
  };

  state = {
    ...this.formInitialState,
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const contacts = this.props.items;
    const value = event.target.name.value;

    if (contacts.some((contact) => contact.name === value)) {
      this.setState({
        name: "",
        number: "",
        sameName: true,
      });
      setTimeout(this.timeOutAlert, 1500);
      return;
    }

    const name = this.state.name;
    const number = this.state.number;
    this.props.onAddContact(name, number);

    this.setState({
      name: "",
      number: "",
    });
  };

  timeOutAlert = () => {
    this.setState({
      sameName: false,
    });
  };

  render() {
    const { name, number, sameName } = this.state;

    return (
      <form
        className={formStyle["contactForm"]}
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <CSSTransition
          classNames="alertWindow"
          in={sameName}
          timeout={1000}
          unmountOnExit
        >
          <div className={formStyle.alertModal}>Contact already exist!</div>
        </CSSTransition>

        <label htmlFor="name" className={formStyle["contactForm__label"]}>
          Name
        </label>
        <input
          className={formStyle["contactForm__input"]}
          type="text"
          name="name"
          id="name"
          placeholder="   Enter your name"
          value={name}
          onChange={this.handleInput}
        />
        <label htmlFor="number" className={formStyle["contactForm__label"]}>
          Number
        </label>
        <input
          className={formStyle["contactForm__input"]}
          type="tel"
          name="number"
          id="Number"
          placeholder="   Enter your number"
          value={number}
          onChange={this.handleInput}
        />

        <button className={formStyle["contactForm__submit"]} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: formSelectors.getItems(state),
  };
};

const mapDispatchToProps = {
  onAddContact: formOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
