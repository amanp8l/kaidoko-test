import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CourseSection";
import BrowseCategories from "./components/BrowseCategories";
import CarouselSection from "./components/CarouselSection";
import Collaborations from "./components/Collaborations";
import BlendedLearningSection from "./components/BlendedLearningSection";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#fff9ef"}}>
      <Header />
      <HeroSection />
      <CoursesSection />
      <BrowseCategories />
      {/* <CarouselSection /> */}
      <Collaborations />
      {/* <BlendedLearningSection /> */}
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
