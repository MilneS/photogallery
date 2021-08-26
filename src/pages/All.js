import classes from "./All.module.css";
import AllCard from "../components/AllCard";

const All = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.cardsContainer}>
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
          <AllCard />
        </div>
      </div>
    </div>
  );
};

export default All;