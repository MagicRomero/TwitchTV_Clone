import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  background: #fff;
  height: ${(props) => props.theme.navbarHeight};
  width: 100%;
  box-shadow: 0 1px 2px #d0d0d2;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 0.5rem;
  height: 100%;
`;

const LeftItems = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LeftItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  font-weight: 500;

  ${(props) =>
    props.active &&
    `border-bottom: 2px solid ${props.theme.secondaryBrandColor}`};
`;

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <LeftItems>
          <LeftItemBlock>
            <Link href="/explore">Explore</Link>
          </LeftItemBlock>
        </LeftItems>
        <div>
          <input type="text" placeholder="Buscar" />
        </div>
        <div>aa</div>
      </Nav>
    </Header>
  );
};

export default Navbar;
