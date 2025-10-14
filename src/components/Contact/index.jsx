import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 0 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Label = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

const InputBase = `
  flex: 1;
  background-color: transparent;
  border: 1px solid currentColor;
  outline: none;
  font-size: 16px;
  color: inherit;
  border-radius: 12px;
  padding: 12px 14px;
  transition: border-color .15s ease, box-shadow .15s ease;
  &::placeholder { opacity: .7; }
  &:focus { border-color: ${({ theme }) => theme.primary}; box-shadow: 0 0 0 3px rgba(79,140,255,.15); }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactInput = styled.input`${InputBase}`;
const ContactInputMessage = styled.textarea`
  ${InputBase};
  min-height: 110px;
  resize: vertical;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: #ff6b6b;
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, #6c2cff 0%, #c92cff 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform .1s ease, opacity .2s ease, box-shadow .2s ease;
  box-shadow: 0 8px 18px rgba(108,44,255,.25);

  &:hover { transform: translateY(-1px); opacity: .98; }
  &:active { transform: translateY(0); opacity: .94; }
  &:disabled { opacity: .6; cursor: not-allowed; }
`;

// Visually hidden honeypot for bots
const Honeypot = styled.input`
  position: absolute;
  left: -9999px;
  opacity: 0;
`;

const Contact = () => {
  const form = useRef(null);
  const [open, setOpen] = useState(false);
  const [toastType, setToastType] = useState("success"); // "success" | "error"
  const [toastMsg, setToastMsg] = useState("Email sent successfully!");
  const [loading, setLoading] = useState(false);

  // simple validation state
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errs = {};
    const email = data.get("from_email")?.trim();
    const name = data.get("from_name")?.trim();
    const subject = data.get("subject")?.trim();
    const message = data.get("message")?.trim();

    if (!email) errs.from_email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.from_email = "Enter a valid email.";

    if (!name) errs.from_name = "Name is required.";
    if (!subject) errs.subject = "Subject is required.";
    if (!message) errs.message = "Message is required.";

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    // honeypot stop
    const botField = form.current.querySelector('input[name="bot_field"]')?.value;
    if (botField) return;

    const formData = new FormData(form.current);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    try {
      setLoading(true);
      // ⚠️ Move these IDs to environment variables in production
      await emailjs.sendForm(
        "service_ihdbf1k",
        "template_emveg2m",
        form.current,
        "sfoHxWhB9Hm7oLa6j"
      );
      setToastType("success");
      setToastMsg("Email sent successfully!");
      setOpen(true);
      form.current.reset();
    } catch (err) {
      console.error(err);
      setToastType("error");
      setToastMsg("Something went wrong. Please try again.");
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>

        <ContactForm ref={form} onSubmit={handleSubmit} noValidate>
          <Honeypot type="text" name="bot_field" tabIndex={-1} autoComplete="off" />

          <ContactTitle>Email Me 🚀</ContactTitle>

          <FieldWrapper>
            <Label htmlFor="from_email">Your Email</Label>
            <ContactInput
              id="from_email"
              name="from_email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.from_email}
              required
            />
            {errors.from_email && <ErrorText>{errors.from_email}</ErrorText>}
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="from_name">Your Name</Label>
            <ContactInput
              id="from_name"
              name="from_name"
              placeholder="John Doe"
              autoComplete="name"
              aria-invalid={!!errors.from_name}
              required
            />
            {errors.from_name && <ErrorText>{errors.from_name}</ErrorText>}
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="subject">Subject</Label>
            <ContactInput
              id="subject"
              name="subject"
              placeholder="Let's work together"
              aria-invalid={!!errors.subject}
              required
            />
            {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="message">Message</Label>
            <ContactInputMessage
              id="message"
              name="message"
              placeholder="Tell me a bit about your project..."
              rows={5}
              aria-invalid={!!errors.message}
              required
            />
            {errors.message && <ErrorText>{errors.message}</ErrorText>}
          </FieldWrapper>

          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </ContactButton>
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setOpen(false)} severity={toastType} sx={{ width: "100%" }}>
            {toastMsg}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
