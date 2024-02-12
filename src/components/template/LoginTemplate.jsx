import React from "react";
import styled from "styled-components";
import {Btnsave} from '../molecules/BtnSave';
import {useUserStore} from '../../store/UserStore';

function LoginTemplate() {
  const {adminRegister} = useUserStore();
  return <Container>
    <Btnsave title="Signup" bgcolor="#fff"/>
  </Container>;
}

export default LoginTemplate;

const Container = styled.div`
  height: 100vh;
`;
