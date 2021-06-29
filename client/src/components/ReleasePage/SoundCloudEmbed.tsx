import React from 'react';

interface IEmbed {
  url: string;
  title: string;
}

const SoundCloudEmbed: React.FC<IEmbed> = ({ url, title }) => {
  return (
    <div className="">
      <iframe
        title={title}
        width="50%"
        height="50%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
    </div>
  );
};

export default SoundCloudEmbed;
