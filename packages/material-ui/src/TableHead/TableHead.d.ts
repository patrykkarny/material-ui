import { SxProps } from '@material-ui/system';
import * as React from 'react';
import { Theme } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

export interface TableHeadTypeMap<P = {}, D extends React.ElementType = 'thead'> {
  props: P & {
    /**
     * The content of the component, normally `TableRow`.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
    };
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableHead API](https://material-ui.com/api/table-head/)
 */
declare const TableHead: OverridableComponent<TableHeadTypeMap>;

export type TableHeadClassKey = keyof NonNullable<TableHeadTypeMap['props']['classes']>;

export type TableHeadProps<
  D extends React.ElementType = TableHeadTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableHeadTypeMap<P, D>, D>;

export default TableHead;
