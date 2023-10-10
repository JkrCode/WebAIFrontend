
    const containerStyle = {
      backgroundImage: `url('../src/assets/background-image.jpg')`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'flex-start', 
      filter: 'saturate(50%)', 
      paddingTop: 0, 
      paddingBottom: 0, 
    };

    const contentStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        padding: '20px', 
        minWidth: '720px', 
      };

    export default containerStyle;

    export {contentStyle};