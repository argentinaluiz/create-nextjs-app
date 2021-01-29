// @flow
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import * as md5 from "md5";
import { useRouter } from "next/dist/client/router";

interface User {
  name: string;
  email: string;
}

interface UserProps {
  user: User;
}

const User: React.FunctionComponent<UserProps> = (props) => {
  const { user } = props;
  const router = useRouter();
  if(router.isFallback){
      return <div>carregando...</div>;
  }
  if (!user) {
    return <div>Usuário não encontrado</div>;
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
  let data;
  try {
    const response = await axios.get(
      `/api/users/${id}`
    );
    data = response.data;
  } catch (e) {
    data = null;
  }

  return {
    props: {
      user: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
    //fazer mapeamento dos usuários mais acessados
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
};
