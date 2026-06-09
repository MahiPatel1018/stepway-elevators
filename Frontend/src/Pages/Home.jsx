import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Stats from "../components/Stats";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          StepWay Elevators | Elevator Solutions in Ahmedabad
        </title>

        <meta
          name="description"
          content="StepWay Elevators provides passenger lifts, hospital lifts, freight lifts, home elevators, installation, maintenance and elevator solutions in Ahmedabad."
        />

        <meta
          name="keywords"
          content="elevators, lifts, passenger lift, hospital lift, freight lift, home lift, Ahmedabad elevators, StepWay Elevators"
        />
      </Helmet>

      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <Testimonials />
      <Stats />
      <Contact />
    </>
  );
}