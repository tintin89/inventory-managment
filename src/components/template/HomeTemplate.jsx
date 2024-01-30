import React from 'react'
import styled from 'styled-components'

function HomeTemplate() {
  return (
    <Container>
        <h1>Home Template</h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${({theme})=>theme.bgtotal};
  color: ${({theme})=>theme.text};
  width: 100%;
`;

export default HomeTemplate