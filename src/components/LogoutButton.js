import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";

// const Logout = styled.button`
//   border: none;
//   width: 2rem;
//   height: 2rem;
//   background-color: transparent;
//   svg {
//     width: 100%;
//     height: auto;
//     filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
//       brightness(100%) contrast(126%);
//     transition: all 0.3s ease;
//     &:hover {
//       border: none;
//       padding: 0;
//       opacity: 0.5;
//     }
//   }
// `;
const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;
// const Details = styled.div`
//   display: ${(props) => (props.clicked ? "flex" : "none")};
//   justify-content: space-between;
//   align-items: center;
// `;
// const Name = styled.div`
//   padding: 0 1.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   h4 {
//     display: inline-block;
//   }
//   a {
//     font-size: 0.8rem;
//     text-decoration: none;
//     color: var(--grey);
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

function LogoutButton() {
  // const [click, setClick] = React.useState(false);
  // const handleClick = () => setClick(!click);
  const [profileClick, setprofileClick] = React.useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  const {
    isAuthenticated,
    logout,
    user,
  } = useAuth0();
  return isAuthenticated && (
    <Profile clicked={profileClick}>
      <img
        src={user.picture}
        alt="Profile"
      />
      {/* <Details clicked={profileClick}>
          <Name>{user.name}</Name>
          <Logout onClick={() => {
            logout({ returnTo: window.location.origin });
          }}>
            <svg viewBox="0 0 512 512" width="100" title="power-off">
              <path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z" />
            </svg>
          </Logout>
        </Details> */}
    </Profile>

  );
}

export default LogoutButton;