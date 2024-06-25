// src/index.tsx or src/main.tsx
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import RouteList from "./routes/RouteList";
import "./assets/language/i18n";
import store from "./store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouteList />
    </QueryClientProvider>
  </Provider>
);
