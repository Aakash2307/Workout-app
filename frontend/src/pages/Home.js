import { useEffect, useState } from "react";

// Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";


const Home = () => {
  const [workouts, setworkouts] = useState([]);

  useEffect(() => {
    // try to fetch api from the workout
    const fetchworkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setworkouts(json);
      }
    };

    fetchworkouts();
  }, []); // this is to make sure that the thing is fired only once
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;
