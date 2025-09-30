// utils/sendEmail.js
import axios from "axios";

export const sendEmail = async (formData) => {
  try {
    const response = await axios.post("https://api.web3forms.com/submit", {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY, // your API key
      subject: "Verdigrow - New Quote Request",
      from_name: "Get a Quote",
      from_email: formData.email,
      message: `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phoneNumber}
        Company: ${formData.companyName}
        Product: ${formData.product}
        Quantity: ${formData.quantity}
        Notes: ${formData.notes}
        Address 1: ${formData.address1}
        Address 2: ${formData.address2}
        City: ${formData.city}
        State: ${formData.state}
        Postal Code: ${formData.postalCode}
        Country: ${formData.country}
      `,
      reply_to: formData.email,
    });

    return response.data;
  } catch (error) {
    console.error("Web3Forms error:", error);
    throw error;
  }
};
