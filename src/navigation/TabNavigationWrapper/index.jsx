import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// store
import { useSelector } from 'react-redux';
import { userSelector } from 'store/user';
// pages
import CreateUser from 'pages/CreateUser';

const TabNavigationWrapper = () => {
  const user = useSelector(userSelector);
  const history = useHistory();
  const { pathname } = history.location;

  useEffect(() => {
    if (
      !user.username &&
      (pathname.includes('profile') ||
        pathname.includes('contact') ||
        pathname.includes('capabilities'))
    ) {
      history.push('/create-user/account');
    }
  }, [user.username, history, pathname]);

  return <CreateUser />;
};

export default TabNavigationWrapper;
