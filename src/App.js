import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Mail from "./components/Mail";
import { getMail } from "./Redux/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAPIMail();
  }, []);
  const getAPIMail = () => {
    fetch("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getMail(data));
      });
  };

  return (
    <ChakraProvider>
      <div>
        <Mail />
      </div>
    </ChakraProvider>
  );
}

export default App;
