import { Routes, Route } from "react-router-dom";
import { Contact } from "./Pages/Contact/contact";
import { Home } from "./Pages/Home/home";
import { NotFound } from "./Pages/NotFound/notFound";
import { Nav } from "./Pages/Nav/nav";
import { Settings } from "./Pages/Settings/settings";
import { UserList } from "./Pages/UserList/userList";
import { User } from "./Pages/User/user";
import { Blog } from "./Pages/Blog/blog";
import { PostBlog } from "./Pages/PostBlog/post";





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
          <Route path="blog" element = { <Blog/>} />
          <Route path="blog/:postID" element = { < PostBlog />} />
        </Routes>
    </div>
  );
}

export default App;