import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { PageTwo } from "./routes/PageTwo";
import { Provider } from "react-redux";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="PageTwo" element={<PageTwo />} />
			</Routes>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
