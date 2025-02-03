import * as LocalAuthentication from "expo-local-authentication";

export default async function localAuth() {
  try {
    const res = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate please",
      cancelLabel: "Cancel",
    });
    console.log(res);
    return res.success;
  } catch (error) {
    console.error("Authentication Error:", error);
    return false; // Return false on error
  }
}
