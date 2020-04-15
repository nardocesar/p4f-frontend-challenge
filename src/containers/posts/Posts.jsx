import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './Posts.scss';

import { getUserPosts } from '../../utils/services';
import { loadPosts } from '../../modules/redux/actions';

import Menu from '../../components/menu/Menu';

const Posts = ({ posts, users, dispatch }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const userID = useLocation().pathname.split('/').pop();
  const userInfo = users.find((item) => item.id == userID);

  useEffect(() => {
    setIsLoaded(false);

    getUserPosts(userID)
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadPosts(data));
        setIsLoaded(true);
      });
  }, [userInfo]);

  const routeID = useLocation().pathname.split('/').pop();
  return isLoaded ? (
    <>
      <Menu id={routeID} />
      <section>
        <p>{userInfo.name}</p>
        <p>Endereço:</p>
        <p>{userInfo.address.street}</p>
        <p>{`${userInfo.address.city}, ${userInfo.address.zipcode}`}</p>

        <ul>
          {posts.map((post) => (
            <li>
              <h4>{ post.title }</h4>
              <p>{ post.body }</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  ) : (
    <>
      <Menu id={routeID} />
      <section>Loading...</section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { users, posts } = state;
  return { users, posts };
};

export default connect(mapStateToProps)(Posts);
