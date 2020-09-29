import React, { Component } from 'react';
import axios from 'axios';
import Desk from "../images/desk.jpg";


const styles = {
    imageStyle: {
        backgroundImage: `url(${Desk})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 652

    },
    formArea: {
        margin: "auto",
        width: "65%",
        paddingTop: 100,
        paddingLeft: 185
    },
    labelStyle: {
        color: "white",
    },
    buttonStyle: {
        backgroundColor: "#c44051",
        color: "white"
    }

};

export default class Contact extends Component {

    state = {
        name: "",
        email: "",
        message: "",
        sent: false
    }

    //handle input
    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    //end of handle input
    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/form', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log("message not sent");
            })

    }

    //Resetting the initial data

    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            message: ""
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }




    render() {
        return (
            <div style={styles.imageStyle} className="img-fluid mt-1">
                <div style={styles.formArea}>
                    <form className="w-75" onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label style={styles.labelStyle} for="nameInput">Name</label>
                            <input type="text" className="form-control" id="nameInput"
                                placeholder="John Smith"
                                title="Please enter your first and last name"
                                value={this.state.name}
                                onChange={this.handleName}
                                required

                            />
                        </div>
                        <div className="form-group">
                            <label style={styles.labelStyle} for="emailAddressInput">Email</label>
                            <input type="email" className="form-control" id="emailAddressInput" placeholder="name@example.com"
                                title="Please enter your email address"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={styles.labelStyle} for="messageTextAreaInput">Message</label>
                            <textarea className="form-control" id="messageTextAreaInput" rows="5"
                                value={this.state.message}
                                onChange={this.handleMessage}
                                required

                            ></textarea>
                        </div>
                        <button style={styles.buttonStyle} type="submit" className="btn theme-submit float-right" placeholder="Enter you message here"
                            title="Please enter your message">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default contact
