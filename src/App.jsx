import { Container } from "react-bootstrap";
import FormComponent from "./componets/FormComponent";
import ThemeToggle from "./componets/common/ThemeToggle";

function App() {
  return (
    <>
      <Container className="pt-4">
        <ThemeToggle />
        <FormComponent />
      </Container>
    </>
  );
}

export default App;
