import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./context/authContext";
import { MyRoutes } from "./routers/routes";
import { createContext, useState } from "react";
import { Dark, Light } from "./styles/themes";

export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <Container>
            <section className="ContentSidebar">Sidebar</section>
            <section className="ContentMenuHam"> Burger Menu</section>
            <section className="ContentRoutes">
              <MyRoutes />
            </section>
          </Container>
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};
`;

export default App;
