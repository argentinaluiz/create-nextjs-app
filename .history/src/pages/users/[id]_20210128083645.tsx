// @flow
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
interface UserProps{
    name: string;
    email: string;
};

const User: React.FunctionComponent<UserProps> = (props) => {
    
  return <div>
      <img src={`https://www.gravatar.com/avatar/${md5(u.email)}`} alt="" /> - {u.name}
  </div>;
};

export default User;

export const getStaticProps: GetStaticProps = async (context) => {
  const {
      params: {id}
  } = context;  
  const { data } = await axios.get(
    `http://host.docker.internal:3001/api/users/${id}`
  );

  return {
    props: {
      users: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
     return {
         paths: [
             {params: {id: '1'}},
             {params: {id: '2'}},
         ],
         fallback: false
     }
}
