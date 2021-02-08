import Navbar from "@/components/Navbar";
import styled from "styled-components";

const MainContainer = styled.main`
  margin-top: ${(props) => props.theme.navbarHeight};
`;

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <Navbar />
      {children}
    </MainContainer>
  );
};

export default MainLayout;
