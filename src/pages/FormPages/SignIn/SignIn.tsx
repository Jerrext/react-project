import React from "react";
import styles from "./SignIn.module.scss";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Button, { ButtonType } from "../../../components/Button";
import FormPage from "../FormPage";

const SignIn = () => {
  return (
    <FormPage titleFormPage="Sign In">
      <Form>
        <div className={styles.inputsWrapper}>
          <Input title="Email" placeholder="Your email"/>
          <div className={styles.passwordWrapper}>
            <Input title="Password" placeholder="Your password"/>
            <div className={styles.forgotPass}>Forgot password?</div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button title={"Sign In"} type={ButtonType.Primary} onClick={() => {}}/>
            <div>Don’t have an account? <a href="#" className={styles.signUpLink}>Sign Up</a></div>
          </div>
        </div>
      </Form>
    </FormPage>
      
  );
};

export default SignIn;
