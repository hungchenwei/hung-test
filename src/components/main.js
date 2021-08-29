import React, { useState } from "react";
import "../app.scss";
import SearchField from "react-search-field";
import DeleteIcon from '@material-ui/icons/Delete';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhone: '',
            phoneSearchList: []
        }
    };

    componentDidMount() {
        this.setState({ phoneSearchList: this.props.list })
    }



    render() {
        // let list = this.props.list;
        const newPhoneSearchList = this.state.phoneSearchList?.filter((name) => {
            if (this.state.searchPhone.trim() === '') return true
            else if (name.phone.includes(this.state.searchPhone.trim())) return true
            else return false
        })
        if (newPhoneSearchList.length === 0) {

            return <>
                <SearchField
                    placeholder="Search Phone"
                    onChange={(text) => this.setState({ searchPhone: text })}
                    searchText={this.state.searchPhone}
                    classNames="test-class"
                />
                <div>查無資料</div>
            </>;
        } else {
            return <main>
                <SearchField
                    placeholder="Search Phone"
                    onChange={(phone) => this.setState({ searchPhone: phone })}
                    searchText={this.state.searchPhone}
                    classNames="test-class"
                />

                {
                    newPhoneSearchList?.map((item, index) => {
                        return <div key={index}>
                            <span>姓名:{item.text} 電話:{item.phone} 信箱:{item.email} 生日:{item.date}</span>
                        </div>;

                    })
                }
            </main>
        }
    }

}

export default Main;