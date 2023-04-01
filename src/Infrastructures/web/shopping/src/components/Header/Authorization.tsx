import React from "react";
import { ReactComponent as BagSvg } from "../../assets/shopping-bag.svg";
import { ReactComponent as ProfileSvg } from "../../assets/account-circle.svg";

const Authorization = () => {
  return (
    <>
      <BagSvg style={{ cursor: "pointer" }} />
      <ProfileSvg style={{ cursor: "pointer" }} />
    </>
  );
};

export default Authorization;
