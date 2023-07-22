import { useState } from "react";
import "./App.css";
import axios from "axios";
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
