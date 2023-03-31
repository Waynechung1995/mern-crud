import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const Profile = (props) => {
    let { currentUser, setCurrentUser } = props;
    console.log(currentUser);
    return (
        <div style={{ padding: "3rem" }}>
            {!currentUser && <div>You must login first before getting your profile.</div>}
            {
                currentUser &&
                <div>
                    <h1>In profile page</h1>
                    <header className="jumbotron">
                        <h3><strong>{currentUser.user.username}</strong></h3>
                        <p><strong>Token: {currentUser.token}</strong></p>
                        <p><strong>ID: {currentUser.user._id}</strong></p>
                        <p><strong>Email: {currentUser.user.email}</strong></p>
                    </header>
                </div>
            }
        </div>
    )
}

export default Profile;