// @flow
import axios from "axios";
import { GetStaticProps } from "next";
import * as React from "react";
import users from "./api/users";
import * as md5 from 'md5';

interface User {
  name: string;
  email: string;
}

interface UserProps {
  users: User[];
}
export const Users: React.FunctionComponent<UserProps> = (props) => {
  const { users } = props;
  return (
    <ul>
      {users.map((u, key) => (
        <li>
          <img src={`https://www.gravatar.com/avatar/${md5(u.email)}`} alt="" /> - {u.name}
        </li>
      ))}
    </ul>
  );
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
