import React from "react";
import VLibras from "./components/VLibras";
import Rotas from "./pages/Rotas";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
      <VLibras />
    </div>
  );
}

export default App;
