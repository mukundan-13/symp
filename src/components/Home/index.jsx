// import { useState, useEffect } from "react";
// import "./index.css";

// const Home = () => {
//   const calculateTimeLeft = () => {
//     const eventDate = new Date("2025-02-26T00:00:00").getTime();
//     const now = new Date().getTime();
//     const difference = eventDate - now;

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="con">
//       <div className="home-con">
//         <div className="img">
//           <img src="logo.svg" className="img" alt="Logo" />
//           <p className="glowing-text">Department of Computer Science</p>
//         </div>
//         <p className="glowing-text">Where Innovation Meets Silver Screen</p>

//         {/* Countdown Timer Section */}
//         <div className="countdownSection">
//           <h2 className="countdownTitle">Symposium Starts In</h2>
//           <div className="countdownTimer">
//             <div className="timeBox">
//               {timeLeft.days} <div>Days</div>
//             </div>
//             <div className="timeBox">
//               {timeLeft.hours} <div>Hours</div>
//             </div>
//             <div className="timeBox">
//               {timeLeft.minutes} <div>Minutes</div>
//             </div>
//             <div className="timeBox">
//               {timeLeft.seconds} <div>Seconds</div>
//             </div>
//           </div>
//           */
//           <p className="glowing-text">26 February 2025</p>
//         </div>

//         <div className="img-con">
//           <img src="cam.png" className="img-in" alt="Camera" />
//           <div className="quote">
//             <p className="glowing-text">
//               Join us for a spectacular journey into technology, creativity, and
//               innovation, all wrapped in the charm of Retro Cinema.
//             </p>
//           </div>
//           <img src="pop.jpg" className="img-in" alt="Popcorn" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
export default "rw";
