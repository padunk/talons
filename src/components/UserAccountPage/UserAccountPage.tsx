import React from "react";

export function UserAccountPage(props: any) {
  const { displayName, email, phoneNumber, photoURL } = props.authUser;
  console.log(props);

  return (
    <div>
      <div>
        <img src={photoURL} alt={`${displayName} picture profile`} />
      </div>
      <div>
        <form action='' method='post'>
          <div>
            <label htmlFor='user-name'>Name: </label>
            <input
              type='text'
              name='user-name'
              id='user-name'
              defaultValue={displayName}
            />
          </div>
          <div>
            <label htmlFor='user-email'>email: </label>
            <input
              type='email'
              name='user-email'
              id='user-email'
              defaultValue={email}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
