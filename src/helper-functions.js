
const containerStyle = {
  backgroundImage: `url('../src/assets/background-image.jpg')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  minHeight: '100vh',
  position: 'relative',
};

const overlayStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  overflowY: 'auto',
  maxWidth: '80%',
};

const roundedImageStyle = {
  maxWidth: '40%',
  borderRadius: '10px',
  float: 'left',
  marginRight: '20px'
};

    export default containerStyle;

    export {overlayStyle, roundedImageStyle};