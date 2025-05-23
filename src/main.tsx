import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.tsx";

import Quest from "./components/Quest/Quest.tsx";
import "./index.css";
import Error404 from "./components/Error404/Error404.tsx";
import Home from "./components/Home/Home.tsx";
import EasterEgg from "./components/EasterEgg/EasterEgg.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/quest",
				element: <Quest />,
			},
			{
				path: "/quest/:level",
				element: <Quest />,
			},
			{
				path: "/404",
				element: <Error404 />,
			},
			{
				path: "/easter-egg",
				element: <EasterEgg />,
			},
			{
				path: "*",
				element: <Error404 />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
