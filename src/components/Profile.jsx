import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const auth0Object = useAuth0();

  console.log(auth0Object);

  const { user, isAuthenticated, isLoading } = auth0Object;

  
  if (isLoading && !isAuthenticated) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;