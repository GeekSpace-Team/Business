import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteList from "./routes/RouteList.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouteList />
  </QueryClientProvider>
);
