import React from "react";
import styles from "./Success.module.scss";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import Form from "../../../components/Form";
import Button, { ButtonType } from "../../../components/Button";
import FormPage from "../FormPage";

const Success = () => {
  return (
    <FormPage titleFormPage="Success">
      <Form>
        <div className={styles.successText}>
          <p>Email confirmed.</p>
          <p>Your registration is now completed</p>
        </div>
        <Button title={"Go to home"} type={ButtonType.Primary} onClick={() => {}}/>
      </Form>
    </FormPage>
  );
};

export default Success;
