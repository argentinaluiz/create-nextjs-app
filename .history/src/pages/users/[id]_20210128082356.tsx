// @flow
import axios from "axios";
import { GetStaticProps } from "next";
import * as React from "react";
type Props = {};
const User = (props: Props) => {
  return <div></div>;
};

export default User;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get(
    "http://host.docker.internal:3001/api/users"
  );

  return {
    props: {
      users: data,
    },
  };
};
