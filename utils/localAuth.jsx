import * as LocalAuthentication from "expo-local-authentication";

export default async function localAuth() {
  const isEnrolled = await LocalAuthentication.isEnrolledAsync();

  if (!isEnrolled) return "no_pin_set"; //if no pin set, no needs to carry on

  try {
    const res = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate please",
      cancelLabel: "Cancel",
    });
    return res.success;
  } catch (error) {
    console.error("Authentication Error:", error);
    return false; // Return false on error
  }
}
