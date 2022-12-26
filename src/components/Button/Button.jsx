import PropTypes from 'prop-types';
import { ButtonContainer, LoadButton } from './Button.styled.jsx';

const Button = ({ onLoadMore }) => {
  return (
    <ButtonContainer onClick={onLoadMore}>
      <LoadButton type="button">Load more</LoadButton>
    </ButtonContainer>
  );
};
export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
