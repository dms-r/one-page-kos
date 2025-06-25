"use server";

import { z } from "zod";

const inquirySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitInquiry(formData: { name: string; email: string; message: string; }) {
  const parsed = inquirySchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    // In a real application, you would process the data here:
    // - Send an email notification
    // - Save to a database (e.g., Firestore)
    console.log("New inquiry received:", parsed.data);
    
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Inquiry submitted successfully!" };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}
