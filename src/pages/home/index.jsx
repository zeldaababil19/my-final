import './styles.css';
import Card from '../../components/card';
import { Heading } from '@chakra-ui/react';
import { getUserPlaylist } from '../../libraries/spotify';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isAuthenticated, accessToken } = useSelector((state) => state.auth);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getUserPlaylist(accessToken).then((user) => setPlaylists(user.items));
  }, [isAuthenticated, accessToken]);

  return (
    <div className='home'>
      <Heading className='subtitle'> Your Playlists </Heading>
      <div className='content'>
        {playlists.map((playlist) => (
          <Card
            key={playlist.id}
            onClick={() => window.open(playlist.external_urls.spotify)}
            alt={playlist.name}
            thumbnail={playlist.images[0]?.url}
            title={playlist.name}
            owner={'By ' + playlist.owner.display_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
