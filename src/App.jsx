import "./App.css";
import PokeAPI from "./Components/PokeAPI";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  return (
    <QueryClientProvider client={client}>
      <PokeAPI />
    </QueryClientProvider>
  );
}

export default App;
