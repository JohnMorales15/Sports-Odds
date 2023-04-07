import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/profile.module.css";
import Header from "@/src/Header";
import { useAppContext } from "@/src/GlobalContext";

function Profile() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { user, setUser } = useAppContext();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const clearAll = () => {
    setPassword("");
    setLastName("");
    setFirstName("");
    setUsername("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = "https://sports-odds.herokuapp.com/update_info";
    // let url = "http://127.0.0.1:5000/update_info";

    try {
      if (username === "") {
        setUsername(user.username);
      }
      if (firstName === "") {
        setFirstName(user.f_name);
      }
      if (lastName === "") {
        setLastName(user.l_name);
      }
      if (password === "") {
        setPassword(user.password);
      }

      const response = await axios
        .post(url, {
          username,
          password,
          firstName,
          lastName,
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data);
          } else {
            setError("Invalid username or password!");
          }
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
    clearAll();
  };

  return (
    <>
      <Header />
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          {user ? (
            <h1>
              {user.f_name} {user.l_name}
            </h1>
          ) : null}
        </div>
        <div className={styles.profile_body}>
          <form onSubmit={handleSubmit}>
            <h2>Account Information</h2>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;