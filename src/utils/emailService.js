import emailjs from "@emailjs/browser";

export const initEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Usando import.meta.env
};

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Corrigido aqui
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // E aqui
      templateParams
    );

    return response;
  } catch (error) {
    throw new Error("Error sending email", error);
  }
};
