import { Loader } from "./components/loader";
import {  Router, defineRouter } from "./libs/routing";
import { homePage } from "./pages/home";
import { worksPage } from "./pages/work";
import { GlobalStyle } from "./styles";

export const router = defineRouter({
  homePage,
  worksPage,
});



function App() {
  return (
    <>
      <GlobalStyle />
      <Router router={router} />
      <Loader />
    </>
  );
}

export default App;
