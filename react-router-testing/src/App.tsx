import { Routes, Route } from "react-router-dom";
import { Contact } from "./Pages/Contact/contact";
import { Home } from "./Pages/Home/home";
import { NotFound } from "./Pages/NotFound/notFound";
import { Nav } from "./Pages/Nav/nav";
import { Settings } from "./Pages/Settings/settings";
import { UserList } from "./Pages/UserList/userList";
import { User } from "./Pages/User/user";

// <Route path="userlist/:userID" element = { <User />} />  - takie jest zagniezdzenie elementow 



function App() {
  return (
    <div>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element = {<NotFound />} />
          <Route path="settings" element = { <Settings />} />
          <Route path="userlist" element = { <UserList />} />
          <Route path="userlist/:userID" element = { <User />} />
        </Routes>
    </div>
  );
}

export default App;