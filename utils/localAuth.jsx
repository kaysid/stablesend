import * as LocalAuthentication from "expo-local-authentication";

const localAuth = async () => {
  try {
    const res = await LocalAuthentication.authenticateAsync();
    return res;
  } catch (error) {
    console.error("localAuth error:", error);
    return false;
  }
};

export default localAuth;
