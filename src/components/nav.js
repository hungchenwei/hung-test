import React from "react";
import "../app.scss";
class Nav extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return <>
            <nav>
                <div>姓名</div>
                <div style={{ marginLeft: 150 }}>電話</div>
                <div style={{ marginLeft: 150 }}>信箱</div>
                <div style={{ marginLeft: 150 }}>生日</div>
            </nav>
        </>;
    }

}

export default Nav;