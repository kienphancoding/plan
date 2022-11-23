import Home from "../pages/Home";
import Todolist from "../pages/Todolist";
import Schedule from "../pages/Schedule";
import Music from "../pages/Music";
import Statics from "../pages/Statics";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", component: Home },
  { path: "/todolist", component: Todolist },
  { path: "/schedule", component: Schedule },
  { path: "/music", component: Music },
  { path: "/statics", component: Statics },


  { path: "*", component: PageNotFound },
];

export { routes };
