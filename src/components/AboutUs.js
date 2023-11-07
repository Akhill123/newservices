// import React from 'react';
// import "./AboutUs.css";

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <header>
//         <h1>About Us</h1>
//       </header>
//       <main>
//         <section className="introduction">
//           <h2>Our Story</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//             lacinia, nisl ut vehicula volutpat, ex massa facilisis sapien, eget
//             tristique erat leo id ex. Donec auctor orci eu purus convallis.
//           </p>
//         </section>
//         <section className="team">
//         <div className="founders-row">
//         <div className="founder-card">
//           <div className="left-content">
//             <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-846741.jpg&fm=jpg" alt="Founder" />
//           </div>
//           <div className="right-content">
//             <h3>John Doe</h3>
//             <p>Co-founder</p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//               lacinia, nisl ut vehicula volutpat, ex massa facilisis sapien, eget
//               tristique erat leo id ex.
//             </p>
//             <button className="see-more">See More</button>
//           </div>
//         </div>
//         <div className="founder-card">
//           <div className="left-content">
//             <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-846741.jpg&fm=jpg" alt="Co-founder" />
//           </div>
//           <div className="right-content">
//             <h3>Jane Smith</h3>
//             <p>Co-founder</p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//               lacinia, nisl ut vehicula volutpat, ex massa facilisis sapien, eget
//               tristique erat leo id ex.
//             </p>
//             <button className="see-more">See More</button>
//           </div>
//         </div>
//       </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import './AboutUs.css'; // Import your CSS file

const AboutUs = () => {
  return (
    <div className="background-layout">
      <div className="content-left">
        <h1>Heading 1</h1>
        <p>Content for the left side.</p>
      </div>
      <div className="content-right">
        <h2>Enquiry Form</h2>
        <form>
          <label>
           Full Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AboutUs;


