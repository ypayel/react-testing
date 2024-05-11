import { Routes, Route } from "react-router-dom";
import { Contact } from "./Pages/Contact/contact";
import { Home } from "./Pages/Home/home";
import { NotFound } from "./Pages/NotFound/notFound";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element = {<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;