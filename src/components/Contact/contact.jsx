// import React from "react";
// import './contact.css'
// import theme from '../../assets/theme_pattern.svg'
// import location from '../../assets/location_icon.svg'
// import mail from '../../assets/mail_icon.svg'
// import call from '../../assets/call_icon.svg'

// const Contact = ()=>{

//     const [result, setResult] = React.useState("");

//     const onSubmit = async (event) => {
//       event.preventDefault();
//       setResult("Sending....");
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "434819f8-5317-43c2-ba3b-e796c4bf7f24");
  
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     };

//     return (
//  <div  id="contact" className="contact">
//     <div className="title">
//         <h1>Get In Touch</h1>
//         <img src={theme} alt="" />
//     </div>
// <div className="contac-us">

//     <div className="talk">
//         <h2>Let's Talk</h2>
//         <p>I'm currently available to take a new job ,
//             so feel free to 
//             send me a message about anything that you want me to work on ,
//              You can contact me any time
//         </p>

//         <div className="feature">
//             <img src={mail} alt="" />
//             <p>melhefnawy718@gmail.com</p>

//         </div>
//         <div className="feature">
//             <img src={call} alt="" />
//             <p>01272808556</p>

//         </div>
//         <div className="feature">
//             <img src={location} alt="" />
//             <p>Dessouk , Egypt</p>

//         </div>




//     </div>

//     <div onSubmit={onSubmit} className="enter">
//         <div className="calls">
//         <h3>Your Name</h3>
//         <input type="text" placeholder="Enter Your Name"/>
//         </div>

//         <div className="calls">
//         <h3>Your Email</h3>
//         <input type="email" placeholder="Enter Your Email" />
//         </div>

//         <div className="calls">
//         <h3>Write Your Message Here</h3>
//         <textarea name="message" placeholder="Enter Your Message" rows='8'></textarea>
//         </div>

//         <button type="submit">Submit now</button>


//     </div>

// </div>
//  </div>
//     )
// }
// export default Contact

import React from "react";
import './contact.css'
import theme from '../../assets/theme_pattern.svg'
import location from '../../assets/location_icon.svg'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "434819f8-5317-43c2-ba3b-e796c4bf7f24");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title">
        <h1>Get In Touch</h1>
        <img src={theme} alt="Theme" />
      </div>

      <div className="contac-us">
        <div className="talk">
          <h2>Let's Talk</h2>
          <p>
            I'm currently available to take a new job, so feel free to send me
            a message about anything that you want me to work on. You can
            contact me any time.
          </p>

          <div className="feature">
            <img src={mail} alt="Mail" />
            <p>melhefnawy718@gmail.com</p>
          </div>
          <div className="feature">
            <img src={call} alt="Call" />
            <p>01272808556</p>
          </div>
          <div className="feature">
            <img src={location} alt="Location" />
            <p>Dessouk, Egypt</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="enter">
          <div className="calls">
            <h3>Your Name</h3>
            <input type="text" name="name" placeholder="Enter Your Name" required />
          </div>

          <div className="calls">
            <h3>Your Email</h3>
            <input type="email" name="email" placeholder="Enter Your Email" required />
          </div>

          <div className="calls">
            <h3>Write Your Message Here</h3>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="8"
              required
            ></textarea>
          </div>

          <button type="submit">Submit Now</button>
          {result && <p className="result-message">{result}</p>}
        </form>
        
      </div>

    </div>
  );
};

export default Contact;
