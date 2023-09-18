"use client";
import React from "react";
import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [touchedFields, setTouchedFields] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleValidation = () => {
    const { email, phone, firstName, lastName, message } = formData;

    let isFormValid = true;

    if (!firstName) {
      isFormValid = false;
    }

    if (!lastName) {
      isFormValid = false;
    }

    if (!validateEmail(email)) {
      setEmailError("Adresse e-mail non valide");
      isFormValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Numéro de téléphone non valide");
      isFormValid = false;
    } else {
      setPhoneError("");
    }

    setIsSubmitDisabled(!isFormValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, phone } = formData;

    if (!validateEmail(email)) {
      setEmailError("Adresse e-mail non valide");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Numéro de téléphone non valide");
      return;
    } else {
      setPhoneError("");
    }

    setIsLoading(true); // Set loading to true when submitting

    // Vous pouvez maintenant traiter les données du formulaire car elles sont valides
    console.log("Données soumises :", formData);

    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        toast.success("Email sent successfully", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
        });

        // Vous pouvez maintenant traiter les données du formulaire car elles sont valides
        console.log("Données soumises :", formData);
        setIsLoading(false);
        router.push("/");
        // Optionally, you can redirect or show a success message here.
      } else {
        console.error("Failed to send email");
        console.log("ehhh");
        toast.error("Failed to send email", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div id={"contact"} className={"px-2 xl:px-40 py-24"}>
      <h1 className={"text-center font-semibold text-5xl khula-family"}>
        {t("Title")}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-between gap-y-3 mt-5"
      >
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="firstName">{t("FirstName")}</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={() => handleValidation("firstName")}
            className={`rounded bg-light_gray py-3 border-none focus:border ${
              touchedFields.firstName || !formData.firstName
                ? "border-red-500"
                : ""
            }`}
            placeholder={t("Type")}
            required
          />
          {touchedFields.firstName && !formData.firstName && (
            <span className="text-red-600">Ce champ est obligatoire</span>
          )}
        </div>
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="lastName">{t("LastName")}</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={() => handleValidation("lastName")}
            className={`rounded  bg-light_gray py-3 border-none focus:border"}${
              !formData.lastName ? "border-red-500" : ""
            }`}
            placeholder={t("Type")}
            required
          />
          {touchedFields.lastName && !formData.lastName && (
            <span className="text-red-600">Ce champ est obligatoire</span>
          )}
        </div>
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="Email">{t("Email")}</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleValidation}
            className={`rounded  bg-light_gray py-3 border-none focus:border ${
              !validateEmail(formData.email) ? "border-red-500" : ""
            }`}
            placeholder={t("Type")}
            required
          />
          {touchedFields.email && !validateEmail(formData.email) && (
            <span className="text-red-600">Adresse e-mail non valide</span>
          )}
        </div>
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="Phone">{t("Phone")}</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleValidation}
            className={`rounded  bg-light_gray py-3 border-none focus:border ${
              !validatePhone(formData.phone) ? "border-red-500" : ""
            }`}
            placeholder={t("Type")}
            required
          />
          {touchedFields.phone && !validatePhone(formData.phone) && (
            <span className="text-red-600">Numéro de téléphone non valide</span>
          )}
        </div>
        <div className={"flex flex-col w-full px-2"}>
          <label htmlFor="message">{t("Message")}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleValidation}
            className={`rounded  bg-light_gray py-3 border-none focus:border h-32 ${
              !formData.message ? "border-red-500" : ""
            }`}
            placeholder={t("Type")}
            required
          ></textarea>
          {touchedFields.message && !formData.message && (
            <span className="text-red-600">Ce champ est obligatoire</span>
          )}
        </div>

        <Button
          type="submit"
          className={`bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitDisabled || isLoading}
        >
          {t("Submit")}
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
