import React, { useEffect, useContext } from 'react';
import PreviewList from '../../components/PreviewList';
import { Container, Text } from '../../theme/components/Foundation.component';
import { EmptyVideos } from './FavoriteVideos.styles';
import VideoContext from '../../providers/VideoProvider/VideoContext';
import { setFavoriteVideosAction } from '../../providers/VideoProvider/VideoProvider.actions';

function FavoriteVideos() {
  const { globalState, globalDispatch } = useContext(VideoContext);

  const { favoriteVideos } = globalState;

  useEffect(() => {
    let favoriteList = localStorage.getItem('REACT-CHALLENGE-FAVORITE-VIDEOS') || null;
    favoriteList = JSON.parse(favoriteList);
    if (favoriteList) globalDispatch(setFavoriteVideosAction(favoriteList));
    // eslint-disable-next-line
  }, []);

  return (
    <Container as="section">
      {/* Video List */}
      {favoriteVideos ? (
        <PreviewList videos={favoriteVideos} path="/favorites/" />
      ) : (
        <EmptyVideos>
          <Text>There is no favorite videos</Text>
        </EmptyVideos>
      )}
    </Container>
  );
}

export default FavoriteVideos;
