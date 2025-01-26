import { React, useState } from "react";
import { Tabs } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import authFailure from "../../components/authFailure";
import tabBar from "../../components/tabBar";

const _layout = () => {
  const [unlocked, setUnlocked] = useState(false);

  const authenticate = async (params) => {
    const res = await LocalAuthentication.authenticateAsync();
    if (res.success) {
      setUnlocked(true);
    }
  };

  if (!unlocked) {
    authenticate();
    return authFailure();
  } else {
    return tabBar();
  }
};

export default _layout;
