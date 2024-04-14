import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useForm } from "react-hook-form";
import { sendMessage } from "../Api/telegram";

export const Contact = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    values:{
      email:''
    }
  });
  const { isSubmitting, errors } = formState;
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onSubmit = async (data) => {
    try {
      const message = `Почта: ${data.email}, Имя:${data.firstName} Сообщение:${data.message}`;
      setButtonText("Sending...");
      await sendMessage(message);
      
      setStatus({ success: true, message: "Message sent successfully" });
      reset();
    } catch (e) {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          {...register("firstName")}
                        />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...register("lastName")}
                        />
                      </Col> */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Your contact"
                          {...register("email")}
                        />
                        {/* {errors.email && (
                          <p className="danger">Email is required</p>
                        )} */}
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          {...register("phone")}
                        />
                      </Col> */}
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          {...register("message")}
                        ></textarea>
                        <button type="submit" disabled={isSubmitting}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
