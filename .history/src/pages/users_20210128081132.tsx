// @flow 
import axios from 'axios';
import { GetStaticProps } from 'next';
import * as React from 'react';
type Props = {
    
};
export const Users = (props: Props) => {
    return (
        <div>
            
        </div>
    );
};

export default Users;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get("http://host.docker.internal:3001/api/users");
  
  return {
    props: {
      users: data,
    },
  };
}