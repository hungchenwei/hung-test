import React from "react";
import "./app.scss";
import Nav from "./components/nav.js";
import AddForm from "./components/add-form.js";
import Main from "./components/main.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { text: "hehho", phone: "09123456", email: '123@gmail.com', date: '2021 - 08 - 02' },
                { text: "123", phone: "097784561", email: '123@gmail.com', date: '2020 - 06 - 23' },
                { text: "456", phone: "0976815032", email: '123@gmail.com', date: '2021 - 04 - 08' },
            ],
        };
    };

    addTextToList(text, phone, email, date) {
        this.state.list.push({ text: text, phone: phone, email: email, date: date });
        this.setState({
            list: this.state.list
        });
    }

    render() {
        return <>
            <Nav />
            <AddForm
                addTextToList={this.addTextToList.bind(this)} />

            <hr />

            <Main list={this.state.list} />
        </>;
    }

}

export default App;