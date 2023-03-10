import React from "react";
import Form from "../../../components/Form";
import Button, { ButtonType } from "../../../components/Button";
import FormPage from "../FormPage";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../Router";

const Success = () => {
  const navigate = useNavigate()
  const homeBtnOnClick = () => {
    navigate(RoutesList.Home)
  }
  return (
    <FormPage titleFormPage="Success">
      <Form>
        <div>
          <p>Email confirmed.</p>
          <p>Your registration is now completed</p>
        </div>
        <Button title={"Go to home"} type={ButtonType.Primary} onClick={homeBtnOnClick}/>
      </Form>
    </FormPage>
  );
};

export default Success;
