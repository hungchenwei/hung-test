import React, { useState } from "react";
import "../app.scss";

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            date: null,
        }
    };

    changeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    changePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }
    changeEmail(e) {

        this.setState({
            email: e.target.value,
        });
    }
    changeDate(e) {
        this.setState({
            date: e.target.value,
        });
    }
    addText(e) {
        if (this.state.name && this.state.phone && this.state.email && this.state.date) {
            e.preventDefault();
            this.props.addTextToList(this.state.name, this.state.phone, this.state.email, this.state.date);
            this.setState({
                name: "",
                phone: "",
                email: "",
                date: null,
            });
            localStorage.setItem("name", this.state.name)
            localStorage.setItem("phone", this.state.phone)
            localStorage.setItem("email", this.state.email)
            localStorage.setItem("date", this.state.date)

        } else alert('請填寫完成')


    }
    render() {
        return <>
            <form onSubmit={this.addText.bind(this)}>
                <input type="text"
                    value={this.state.name}
                    onChange={this.changeName.bind(this)} />
                <input type="text"
                    value={this.state.phone}
                    onChange={this.changePhone.bind(this)} />
                <input type="email"
                    value={this.state.email}
                    onChange={this.changeEmail.bind(this)} />
                <input type="date"
                    value={this.state.date}
                    onChange={this.changeDate.bind(this)} />
                <button>Add</button>
            </form>
        </>;
    }

}

export default AddForm;