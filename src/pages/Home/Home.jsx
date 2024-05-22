import { Helmet } from "react-helmet-async";
import QandA from "../../components/QNA/QandA";
import Slider from "../../components/Slider/Slider";
import JobTabs from "../../components/Tabs/JobTabs";
import UserReview from "../../components/UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Job Nest || Home</title>
      </Helmet>
      <Slider></Slider>
      <JobTabs></JobTabs>
      <QandA></QandA>
      <UserReview></UserReview>
    </div>
  );
};

export default Home;
