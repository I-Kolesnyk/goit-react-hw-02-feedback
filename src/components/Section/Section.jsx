import PropTypes from 'prop-types';
import { SectionContainer, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
