export const useContactStore = (repo) => {
  const submitContactForm = async (formData) => {
    try {
      await repo.submitContactForm(formData);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  };

  const submitBooking = async (bookingData) => {
    try {
      await repo.submitBooking(bookingData);
    } catch (error) {
      console.error('Error submitting booking:', error);
      throw error;
    }
  };

  return { submitContactForm, submitBooking };
};