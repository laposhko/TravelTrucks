import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { useParams } from "react-router-dom";
import { selectCamperById } from "../../redux/campers/selectors";
import { useState } from "react";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import css from "./CamperPage.module.css";
import clsx from "clsx";
import BookingBlock from "../../components/BookingBlock/BookingBlock";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
export default function CamperPage() {
  const id = useParams().id;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCamperById(id));
  // }, [dispatch]);
  const data = useSelector((state) => selectCamperById(state, id));
  const [chosenTab, setChosenTab] = useState("features");
  return (
    <div className={css.camperPage}>
      <CamperInfo data={data}></CamperInfo>
      <ul className={css.switchers}>
        <li
          className={clsx(css.switcher, {
            [css.chosenTab]: chosenTab === "features",
          })}
          onClick={() => setChosenTab("features")}
        >
          Features
        </li>
        <li
          className={clsx(css.switcher, {
            [css.chosenTab]: chosenTab === "reviews",
          })}
          onClick={() => setChosenTab("reviews")}
        >
          Reviews
        </li>
      </ul>
      <div className={css.switchedContent}>
        {chosenTab === "features" && <Features data={data}></Features>}
        {chosenTab === "reviews" && <Reviews reviews={data.reviews}></Reviews>}
        <BookingBlock></BookingBlock>
      </div>
    </div>
  );
}
