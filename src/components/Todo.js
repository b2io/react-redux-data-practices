import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  text-decoration: ${props => ((props.completed) ? 'line-through' : 'none')};
`;

function Todo({ onClick, completed, title }) {
  return (
    <Li completed={completed} onClick={onClick}>
      {title}
    </Li>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Todo;
