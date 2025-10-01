// utils/sendEmail.js
import axios from "axios";

export const sendEmail = async (formData) => {
  try {
    const response = await axios.post("https://api.web3forms.com/submit", {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY, // your API key
      subject: "Verdigrow - New Quote Submission",
      from_name: "Get a Quote",
      from_email: formData.email,
      message: `
        📌 Section 1 – General Information:
          • First Name: ${formData.firstName}
          • Last Name: ${formData.lastName}
          • Email: ${formData.email}
          • Phone: ${formData.phoneNumber}
          • Company: ${formData.companyName}

        📌 Section 2 – Product Details:
          • Product: ${formData.product}
          • Quantity: ${formData.quantity}
          • Notes: ${formData.notes || 'N/A'}

        📌 Section 3 – Address:
          • Address 1: ${formData.address1}
          • Address 2: ${formData.address2 || 'N/A'}
          • City: ${formData.city}
          • State: ${formData.state}
          • Postal Code: ${formData.postalCode}
          • Country: ${formData.country}
`,

      reply_to: formData.email,
    });

    return response.data;
  } catch (error) {
    console.error("Web3Forms error:", error);
    throw error;
  }
};
