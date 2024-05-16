import QandA from "../../components/QNA/QandA";
import Slider from "../../components/Slider/Slider";
import JobTabs from "../../components/Tabs/JobTabs";
import UserReview from "../../components/UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <JobTabs></JobTabs>
      <QandA></QandA>
      <UserReview></UserReview>
    </div>
  );
};

export default Home;
