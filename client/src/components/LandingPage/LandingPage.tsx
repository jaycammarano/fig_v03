import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout/Layout';

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="w-2/3 m-auto mt-16 border-2 border-green-400 rounded">
          <div className="p-4 text-center text-white border-b-4 border-green-400">
            <strong className="text-xl">fig. 3</strong>
            <p> A musical deep dive by Jay Cammarano</p>
          </div>
          <div className="p-4 text-justify text-white border-green-400">
            <p>
              With Fig I brought together the extensive music metadata of
              Discogs and Last.fm with the streaming aspects of SoundCloud.
            </p>
            <br />
            <p>
              I focus on user-curated selections rather than algorithms, which
              leave you listening to the same things over and over. This
              approach creates an even playing field for artists who would
              otherwise get pushed to the margins.
            </p>
            <br />
            <p>
              I hope for a fulfilling experience for the user, where passion for
              information and learning meets a passion for community and music.
            </p>
            <div className="text-center">
              <button className="p-2 mx-2 mt-12 border-2 border-green-600 rounded hover:bg-green-600 hover:bg-opacity-50">
                Learn More
              </button>{' '}
              <Link to="/home">
                <button className="p-2 mx-2 my-4 border-2 border-green-600 rounded hover:bg-green-600 hover:bg-opacity-50">
                  Start Listening
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
