import CheckInputs from "./CheckInputs.js";

export default class CheckIsInvalid extends CheckInputs {
    firstname = id => this.checkInput(id, this.checkName);

    lastname = id => this.checkInput(id, this.checkName);

    email = id => this.checkInput(id, this.checkEmail);

    message = id => this.checkInput(id, this.checkMessage);
}