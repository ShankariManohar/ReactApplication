import React from "react";
import cx from "classnames";

const VisibilityFilters = props => (
  <div className="visibility-filters">
    {props.filters &&
      props.filters.map(filter => (
        <span
          className={cx(
            "filter",
            filter.label === props.activeFilter && "filter--active"
          )}
          onClick={() => {
            props.switchFilter(filter);
          }}
        >
          {filter.label}
        </span>
      ))}
  </div>
);

const FILTER_LABELS = {
  ALL: "all",
  COMPLETE: "complete",
  INCOMPLETE: "incomplete"
};

export const filters = [
  {
    label: FILTER_LABELS.ALL,
    condition: () => true
  },
  {
    label: FILTER_LABELS.COMPLETE,
    condition: todo => todo.completed
  },
  {
    label: FILTER_LABELS.INCOMPLETE,
    condition: todo => !todo.completed
  }
];

export const DEFAULT_ACTIVE_FILTER_INDEX = 0;

export default VisibilityFilters;
