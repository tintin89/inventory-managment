import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./context/authContext";
import { MyRoutes } from "./routers/routes";
import { createContext, useState } from "react";
import { Dark, Light } from "./styles/themes";
import { Device } from "./styles/breackpoints";
import { Sidebar } from "./components/organism/sidebar/Sidebar";

export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <Container className={sidebarOpen ? "active" : ""}>
            <section className="ContentSidebar">
              <Sidebar state={sidebarOpen} setState={()=>setSidebarOpen(!sidebarOpen)}/>
            </section>
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

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};
  .ContentSidebar {
    display: none;
  }
  .ContentmenuHam {
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuHam {
      display: none;
    }
  }
  .ContentRoutes {
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
      grid-column: 2;
    }
  }
`;

export default App;
