import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import FetchItems from "../Component/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Component/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}
export default App;
