import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import UCASCalculator from "./Components/UCAS-Calculator";

function App() {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <Heading>Calculator</Heading>
      </Header>
      <Content>
        <Context>
          Working out your UCAS points can be a pain - especially when you have
          different types of qualifications. Luckily, our calculator is here to
          help. Just add your qualifications and let our UCAS Calculator do the
          maths!
        </Context>
        <UCASCalculator />
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 24px;
`;
const Header = styled.header`
  display: inline-flex;
  margin-bottom: 20px;
`;
const Heading = styled.h1`
  margin: 0px 20px;
`;
const Logo = styled.img`
  height: 40px;
`;
const Content = styled.main``;
const Context = styled.p`
  max-width: 600px;
`;
