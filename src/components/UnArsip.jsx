import PropTypes from 'prop-types';
const UnArsip = ({ unArsip, id }) => {
  return <button onClick={() => unArsip(id)}>Pindahkan</button>;
};

UnArsip.propTypes = {
  unArsip: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default UnArsip;
