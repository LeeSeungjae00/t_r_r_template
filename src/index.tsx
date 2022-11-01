import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import "./css/color.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/* RecoilRoot provider를 이용하여 recoil을 사용가능하도록 설정해줍니다. */}
        <Router>
          <App />
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
