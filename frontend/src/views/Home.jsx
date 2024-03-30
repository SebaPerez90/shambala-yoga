import { DatePicker } from "antd";
import { Button } from "antd";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <DatePicker />
      <Button className="btn" type="primary">
        Button
      </Button>
    </>
  );
};

export default Home;
