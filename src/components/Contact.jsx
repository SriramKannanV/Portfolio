import { FaLocationDot, FaEnvelope, FaLinkedin   } from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState('Send Message');

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...")

      const formData = new FormData(event.target);

      formData.append("access_key", "d6b064ca-5bcd-4f02-80cf-efb68fa77b26");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json();

      if(data.success){
        setResult("Send Message")
        event.target.reset();
      }else{
        setResult("Error", data)
        console.log(data.message);
      }
    }

  return (
    <div id="contact">
      <div className='container m-top'>
        <h3 className='text-center fw-bold'>Contact Me</h3>

        <div className="row mt-5 px-3 px-md-0">
          <div className="col-md-6 contact">
            <h4 className="fw-semibold">Let's Build Something Together.</h4>
            <p className="my-4">I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, 
              feel free to reach out. I'll do my best to get back to you!</p>

            <div>
              <div className="d-flex gap-2 align-items-center mb-3">
                <FaLocationDot className="contact-icon"/>
                <p className="mb-0">Tiruchirappalli, Tamil Nadu, India</p>
              </div>

              <div className="d-flex gap-2 align-items-center mb-3">
                <FaEnvelope className="contact-icon"/>
                <p className="mb-0">sriramkannanv@gmail.com</p>
              </div>

              <div className="d-flex gap-2 align-items-center mb-3">
                <FaLinkedin className="contact-icon"/>
                <p className="mb-0">linkedin.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="col-md-6 d-flex flex-column contact-msg">
            <input name="name" type="text" placeholder="Your Name" required/>
            <input name="email" type="text" placeholder="Your Email" required/>
            <textarea name="message" placeholder="Your Message" required/>
            <button type="submit" className="contact-btn fw-bold fs-5 text-center align-content-center">{result}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
