import * as LocalAuthentication from "expo-local-authentication";

export default async function localAuth() {
  const isEnrolled = await LocalAuthentication.isEnrolledAsync();
  const hasHardware = await LocalAuthentication.hasHardwareAsync();

  if (!hasHardware || (!isEnrolled && hasHardware)) return "no_pin_set"; //if does not have hardware OR is not enrolled, return back to navigation

  try {
    const res = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate please",
      cancelLabel: "Cancel",
      fallbackLabel: "Use PIN",
    });
    return res.success;
  } catch (error) {
    console.error("Authentication Error:", error);
    return false; // Return false on error
  }
}
