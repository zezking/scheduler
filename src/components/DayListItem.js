import React from "react";
import "./DayListItem.scss";
import cx from "classnames";

export default function DayListItem(props) {
  const dayListItemClasses = cx({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });
  const formatSpots = () => {
    if (!props.spots) {
      return "no spots remaining";
    } else if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    } else {
      return `${props.spots} spots remaining`;
    }
  };

  return (
    <li
      data-testid="day"
      className={dayListItemClasses}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
