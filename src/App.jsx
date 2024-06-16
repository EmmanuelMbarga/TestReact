import RouterApp from "./routers/router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import "./App.css"

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <RouterApp />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  );
}

export default App;
