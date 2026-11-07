import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_c69pzq9";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_0ys3url";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "lDGgDW2vikUfIXDh5";

const initialValues = {
  from_name: "",
  from_last: "",
  from_email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values) => {
  const nextErrors = {};

  if (values.from_name.trim().length < 2) {
    nextErrors.from_name = "Merci d'indiquer votre nom (2 caractères minimum).";
  }

  if (values.from_last.trim().length < 2) {
    nextErrors.from_last = "Merci d'indiquer votre prénom (2 caractères minimum).";
  }

  if (!values.from_email.trim()) {
    nextErrors.from_email = "Merci d'indiquer votre adresse e-mail.";
  } else if (!emailPattern.test(values.from_email.trim())) {
    nextErrors.from_email = "Cette adresse e-mail n'est pas valide.";
  }

  if (values.subject.trim().length < 3) {
    nextErrors.subject = "Merci de préciser un sujet.";
  }

  if (values.message.trim().length < 10) {
    nextErrors.message = "Votre message doit contenir au moins 10 caractères.";
  }

  return nextErrors;
};

const baseInput =
  "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400/20 disabled:cursor-not-allowed disabled:opacity-70";

const inputClass = (hasError) =>
  `${baseInput} ${
    hasError
      ? "border-primary-400 focus:border-primary-600"
      : "border-line focus:border-primary-400"
  }`;

const FieldError = ({ id, children }) => (
  <p id={id} role="alert" className="text-xs font-medium text-primary-600">
    {children}
  </p>
);

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const isLoading = status === "loading";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFeedback("Veuillez corriger les champs indiqués avant l'envoi.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.from_name.trim(),
          from_last: values.from_last.trim(),
          from_email: values.from_email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        },
        PUBLIC_KEY
      );

      setValues(initialValues);
      setErrors({});
      setStatus("success");
      setFeedback(
        "Votre message a bien été envoyé. Je vous répondrai dans les meilleurs délais."
      );

      Swal.fire({
        title: "Merci !",
        text: "Votre message a bien été envoyé. Je vous répondrai rapidement.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#C52D78",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setFeedback(
        "L'envoi du message a échoué. Merci de réessayer dans quelques instants."
      );

      Swal.fire({
        title: "Oups...",
        text: "L'envoi du message a échoué. Merci de réessayer plus tard.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#C52D78",
      });
    }
  };

  return (
    <div className="rounded-3xl border border-line bg-card p-6 shadow-panel sm:p-8">
      <h3 className="text-xl font-semibold text-ink">Envoyez-moi un message</h3>
      <p className="mt-1.5 text-sm text-muted">
        Tous les champs sont requis. Je vous réponds sous 24 à 48 h.
      </p>

      <form
        id="contact_form"
        noValidate
        onSubmit={handleSubmit}
        aria-busy={isLoading}
        className="mt-6 flex flex-col gap-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="from_name" className="text-sm font-medium text-ink">
              Nom
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              autoComplete="family-name"
              placeholder="Votre nom"
              value={values.from_name}
              onChange={handleChange}
              disabled={isLoading}
              aria-invalid={Boolean(errors.from_name)}
              aria-describedby={errors.from_name ? "from_name-error" : undefined}
              className={inputClass(Boolean(errors.from_name))}
            />
            {errors.from_name && (
              <FieldError id="from_name-error">{errors.from_name}</FieldError>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="from_last" className="text-sm font-medium text-ink">
              Prénom
            </label>
            <input
              id="from_last"
              name="from_last"
              type="text"
              autoComplete="given-name"
              placeholder="Votre prénom"
              value={values.from_last}
              onChange={handleChange}
              disabled={isLoading}
              aria-invalid={Boolean(errors.from_last)}
              aria-describedby={errors.from_last ? "from_last-error" : undefined}
              className={inputClass(Boolean(errors.from_last))}
            />
            {errors.from_last && (
              <FieldError id="from_last-error">{errors.from_last}</FieldError>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="from_email" className="text-sm font-medium text-ink">
            Adresse e-mail
          </label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.com"
            value={values.from_email}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(errors.from_email)}
            aria-describedby={errors.from_email ? "from_email-error" : undefined}
            className={inputClass(Boolean(errors.from_email))}
          />
          {errors.from_email && (
            <FieldError id="from_email-error">{errors.from_email}</FieldError>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-ink">
            Sujet
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Objet de votre message"
            value={values.subject}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={inputClass(Boolean(errors.subject))}
          />
          {errors.subject && (
            <FieldError id="subject-error">{errors.subject}</FieldError>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Votre message..."
            value={values.message}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass(Boolean(errors.message))} resize-y`}
          ></textarea>
          {errors.message && (
            <FieldError id="message-error">{errors.message}</FieldError>
          )}
        </div>

        {feedback && (
          <div
            role={status === "error" ? "alert" : "status"}
            className={`rounded-xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-primary-500/30 bg-primary-500/10 text-primary-700"
            }`}
          >
            {feedback}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-600 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
              Envoi en cours…
            </>
          ) : status === "success" ? (
            "Message envoyé"
          ) : (
            "Envoyer le message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
