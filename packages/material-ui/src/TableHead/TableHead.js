import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import useThemeProps from '../styles/useThemeProps';
import experimentalStyled from '../styles/experimentalStyled';
import { getTableHeadUtilityClass } from './tableHeadClasses';

const overridesResolver = (props, styles) => styles.root || {};

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getTableHeadUtilityClass, classes);
};

const TableHeadRoot = experimentalStyled(
  'thead',
  {},
  {
    name: 'MuiTableHead',
    slot: 'Root',
    overridesResolver,
  },
)({
  /* Styles applied to the root element. */
  display: 'table-header-group',
});

const tablelvl2 = {
  variant: 'head',
};

const defaultComponent = 'thead';

const TableHead = React.forwardRef(function TableHead(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiTableHead' });
  const { className, component = defaultComponent, ...other } = props;

  const styleProps = {
    ...props,
    component,
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <TableHeadRoot
        as={component}
        className={clsx(classes.root, className)}
        ref={ref}
        role={component === defaultComponent ? null : 'rowgroup'}
        styleProps={styleProps}
        {...other}
      />
    </Tablelvl2Context.Provider>
  );
});

TableHead.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default TableHead;
