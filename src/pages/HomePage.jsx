import TrendingItems from "../components/trending-items/Trending-items";
import ItemsList from "../components/items-list/Items-List";

import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { exampleAction } from "../store/firstSlice";

function HomePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(exampleAction(2))
  }, [dispatch])
  return (
    <div className="homepage">
      <TrendingItems/>
      <ItemsList/>
    </div>
  )
}

export default HomePage;