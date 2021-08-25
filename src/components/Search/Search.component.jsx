import React, { useContext, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useHistory, useLocation } from 'react-router';
import VideoContext from '../../providers/VideoProvider/VideoContext';
import { setInputAction } from '../../providers/VideoProvider/VideoProvider.actions';
import { Box } from '../../theme/components/Foundation.component';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { SearchContainer, SearchInput } from './Search.styles';

function Search() {
  const [inputValue, setInputValue] = useState('wizeline');
  const location = useLocation();
  const history = useHistory();
  const { fetchVideos } = useYoutubeApi();
  const { globalDispatch } = useContext(VideoContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchVideos(inputValue);
    globalDispatch(setInputAction(inputValue));

    // redirect to home page after every search if not in homepage
    if (location.pathname !== '/') history.push('/');
  };

  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <SearchContainer as="form" onSubmit={handleSubmit}>
      <Box pos="absolute" pl="1rem">
        <GoSearch data-testid="input-search" size="1.125rem" color="#BDBDBD" />
      </Box>
      <SearchInput value={inputValue} onChange={handleChange} />
    </SearchContainer>
  );
}

export default Search;
