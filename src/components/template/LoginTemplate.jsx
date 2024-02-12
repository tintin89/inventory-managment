import React from "react";
import styled from "styled-components";
import {Btnsave} from '../molecules/BtnSave';
import {useUserStore} from '../../store/UserStore';
import { useMutation } from "@tanstack/react-query";

function LoginTemplate() {
  const {adminRegister} = useUserStore();
  const mutation = useMutation({
    mutationKey:['Register admin user'],
    mutationFn: async ()=>await adminRegister()
  })
  return <Container>
    <Btnsave title="Signup" bgcolor="#fff"/>
  </Container>;
}

export default LoginTemplate;

const Container = styled.div`
  height: 100vh;
`;
