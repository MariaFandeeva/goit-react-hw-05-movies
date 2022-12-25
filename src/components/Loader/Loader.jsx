import { Circles as Spinner } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <LoaderOverlay>
      <Spinner
        height="100"
        width="100"
        radius="9"
        color="#ff0000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderOverlay>
  );
};
export default Loader;
