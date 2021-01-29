// @flow
import axios from "axios";
import { GetStaticProps } from "next";
import * as React from "react";

interface User{
    name: string;
    email: string;
}

interface UserProps {
    users: User[];
}
export const Users: React.FunctionComponent<UserProps> = (props) => {

  return <ul>
      <li>
          <img src="https://www.gravatar.com/avatar/HASH" alt=""/>
      </li>
  </ul>;
};

export default Users;

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
