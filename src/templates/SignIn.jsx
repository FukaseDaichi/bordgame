import React, { useState, useCallback } from "react";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";

const SignIn = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const inputUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );

  return (
    <div>
      <h2>SignIn</h2>
      <TextInput
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <div>
        <PrimaryButton
          label="SignIn"
          onClick={() => dispatch(signIn(username, password))}
        />

        <div />
      </div>
    </div>
  );
};

export default SignIn;
