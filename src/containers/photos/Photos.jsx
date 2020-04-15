import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import './Photos.scss';

import { getUserPhotos } from '../../utils/services';
import { loadPhotos } from '../../modules/redux/actions';
import Menu from '../../components/menu/Menu';

const Photos = ({ photos, users, dispatch }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const userID = useLocation().pathname.split('/').pop();
  const userInfo = users.find((item) => item.id == userID);

  useEffect(() => {
    setIsLoaded(false);

    getUserPhotos(userID)
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadPhotos(data));
        setIsLoaded(true);
      });
  }, [userInfo]);

  return isLoaded ? (
    <>
      <Menu id={userID} />
      <section>
        <p>{userInfo.name}</p>
        <p>Endereço:</p>
        <p>{userInfo.address.street}</p>
        <p>{`${userInfo.address.city}, ${userInfo.address.zipcode}`}</p>
        <ImageGallery lazyLoad items={photos.map((photo) => ({ original: photo.url, thumbnail: photo.thumbnailUrl }))} />
      </section>
    </>
  ) : (
    <>
      <Menu id={userID} />
      <section>Loading...</section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { users, photos } = state;
  return ({ users, photos });
};

export default connect(mapStateToProps)(Photos);
