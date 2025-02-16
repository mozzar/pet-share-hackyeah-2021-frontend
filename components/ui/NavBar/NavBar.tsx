import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { MdAddCircle, MdHomeFilled, MdOutlineMessage, MdOutlineToys } from 'react-icons/md';
import { GoOrganization } from 'react-icons/go';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// @ts-ignore
import styled from 'styled-components';

const StyledBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavBar: FunctionComponent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const addItemPath = session ? '/items/create' : '/login';

  return (
    <StyledBottomNavigation
      showLabels
      value={router.pathname}
      onChange={(event, newValue) => {
        router.push(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<MdHomeFilled size="30" />} value="/" />
      <BottomNavigationAction label="Organizations" icon={<GoOrganization size="30" />} value="/organizations" />
      <BottomNavigationAction icon={<MdAddCircle size="40" color="var(--secondary)" />} value={addItemPath} />
      <BottomNavigationAction label="Items" icon={<MdOutlineToys size="30" />} value="/items/list" />
      <BottomNavigationAction label="Messages" icon={<MdOutlineMessage size="30" />} value="/messages" />
    </StyledBottomNavigation>
  );
};

export default NavBar;
