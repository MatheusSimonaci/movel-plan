"use server";

export async function submitContactForm(formData: FormData) {
  void formData;

  // In a real application, you would send this to an email service,
  // CRM, or database here.

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
