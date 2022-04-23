import { Box, Grid } from '@chakra-ui/react';
import PlaylistForm from '../../components/playlist-form';
import Track from '../../components/track';
import SearchBar from '../../components/search-bar';
import { getSearchTrack } from '../../libraries/spotify';
import { setTracks } from '../../redux/store/playlist';
import { useSelector, useDispatch } from 'react-redux';

const CreatePlaylist = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const { tracks } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    const options = {
      q: query,
      type: 'track',
      limit: 15,
    };
    getSearchTrack(accessToken, options).then((res) => {
      dispatch(setTracks(res.tracks.items));
    });
  };

  return (
    <Box>
      <PlaylistForm />
      <SearchBar handleSearch={handleSearch} />
      <Grid
        width={'auto'}
        padding='0.75rem'
        templateRows='auto'
        templateColumns='repeat(1, 1fr)'
        gap={2}
        marginTop='.5rem'
      >
        {tracks.map((track) => (
          <Track track={track} key={track.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default CreatePlaylist;
