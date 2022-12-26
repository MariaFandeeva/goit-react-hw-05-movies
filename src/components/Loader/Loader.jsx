import { Circles as Spinner } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <LoaderOverlay>
      <Spinner
        height="70"
        width="70"
        radius="9"
        color="#fff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderOverlay>
  );
};
export default Loader;
