import React from "react";
import styled from "styled-components";
import { Btnsave } from "../molecules/BtnSave";
import { useUserStore } from "../../store/UserStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function LoginTemplate() {
  const navigate = useNavigate();
  const { adminRegister } = useUserStore();
  const mutationSignupUser = useMutation({
    mutationKey: ["Register admin user"],
    mutationFn: async () => {
      const p = {
        email: "admin@admin.com",
        password: "Admin123",
      };
      const dataUser = await adminRegister(p);
      dataUser && navigate("/");
    },
  });
  return (
    <Container>
      <Btnsave
        title="Signup"
        bgcolor="#fff"
        myFunction={mutationSignupUser.mutateAsync}
      />
    </Container>
  );
}

export default LoginTemplate;

const Container = styled.div`
  height: 100vh;
`;
