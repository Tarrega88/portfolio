function TransitionImage({ src, onClick }) {
  return <img src={src} onClick={onClick} key={src} />;
}

export default TransitionImage;
