export const Image = ({ src, alt, isLazy }) => {
  return <img src={src} alt={alt} loading={isLazy ? "lazy" : "eager"} />;
};
