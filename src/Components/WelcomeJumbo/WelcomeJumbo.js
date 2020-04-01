import React, {useState} from "react";
import "./WelcomeJumbo.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import keyImage from "../../images/keys.png"

export function WelcomeJumbo() {
    const [signUpValues, setSignUpValues] = useState({
        username: null,
        password: null,
        confirmPassword: null
    })

    const handleSubmit = () => {
        
    }








    return (
        <div>
            <div className="jumbotron text-center">
                <div className="signUpButton">
                    <button
                        className="btn btn-success btn-lg ripple"
                        href="/"
                        data-toggle="modal"
                        data-target="#signUpModal">
                        Sign up
                    </button>
                </div>
                <div>
                    <img src={keyImage} className="keyImage" alt="Disney key"/>
                </div>
            </div>
            <div
                className="modal fade"
                id="signUpModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="signUpModalTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signUpModalTitle">
                                Sign up
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faTimesCircle}/>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputUsername"
                                        aria-describedby="emailHelp"
                                        onChange={event => setSignUpValues({...signUpValues, username: event.target.value})}
                                        value={signUpValues.username}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword2"
                                        onChange={event => setSignUpValues({...signUpValues, password: event.target.value})}
                                        value={signUpValues.password}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail2">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputEmail2"
                                        aria-describedby="emailHelp"
                                        onChange={event => setSignUpValues({...signUpValues, confirmPassword: event.target.value})}
                                        value={signUpValues.confirmPassword}/>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
