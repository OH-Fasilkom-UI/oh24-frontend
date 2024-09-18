interface VideoProps {
    src: string;
    poster: string;
    controls: boolean;
    width: number;
    height: number;
  }
  
  const Video: React.FC<VideoProps> = ({
    src,
    poster,
    controls,
    width,
    height,
  }) => {
    return (
      <video
        src={src}
        poster={poster}
        controls={controls}
        width={width}
        height={height}
      />
    );
  };