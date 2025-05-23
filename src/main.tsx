import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HeroUIProvider>
			<main className="text-foreground min-h-screen bg-black">
				<App />
			</main>
		</HeroUIProvider>
	</React.StrictMode>
);
