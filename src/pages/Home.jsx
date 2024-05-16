import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import { HomeSection } from "../data/HomeSection";
import { CourseSection } from "../data/CourseSection";
import { TutorsSection, TutorsList } from "../data/TutorsSection";
import { PartnerSection , partnerListSection} from "../data/PartnersSection";
import { contactSection } from "../data/ContactsSection";
import Tutors from "../components/Tutors";
import Parse from "html-react-parser";
function Home() {
  return (
    <div>
      <Navbar />

      <div className="wrapper">
        {/* home section */}
        <section id="home">
          <img src={HomeSection.image} />
          <div className="kolom">
            {Parse(HomeSection.content)}
          </div>

        </section>

        {/* course section */}
        <section id="courses">
          <div className="kolom">{Parse(CourseSection.content)}</div>
          <img src={CourseSection.image} />
        </section>
      </div>

      <section id="tutors">
        <div className="tengah">
          <div className="kolom">
            {/* tutor header */}
            {Parse(TutorsSection.component)}
          </div>
          {/* tutor content */}
          <Tutors tutorsList={TutorsList} />
        </div>
      </section>

      <section id="partners">
        <div className="tengah">
          <div className="kolom">
            {Parse(PartnerSection.content)}
          </div>
          <Partners partnersListSection = {partnerListSection}/>
        </div>
      </section>

      {/* contact section */}
      <div id="contact">
        <div className="wrapper">
          <Contacts contactSection = {contactSection}/>
        </div>
    </div>

      <Footer />
    </div>
  );
}

export default Home;
