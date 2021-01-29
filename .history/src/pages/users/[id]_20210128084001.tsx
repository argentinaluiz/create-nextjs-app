// @flow
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import * as md5 from "md5";

interface User {
  name: string;
  email: string;
}

interface UserProps {
  user: User;
}

const User: React.FunctionComponent<UserProps> = (props) => {
  const { user } = props;
  if(!user){
      return <div>Usuário não encontrado</div>
  }
  return (
    <div>
      <img src={`https://www.gravatar.com/avatar/${md5(user.email)}`} alt="" />{" "}
      - {user.name}
    </div>
  );
};

export default User;

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { id },
  } = context;
  const { data } = await axios.get(
    `http://host.docker.internal:3001/api/users/${id}`
  );

  return {
    props: {
      user: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
};
