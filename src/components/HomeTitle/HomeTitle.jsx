import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';


function HomeTitle({children}) {
    return (
      <Helmet>
        <title>{children}</title>
      </Helmet>
    );
  }

  HomeTitle.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default HomeTitle;

