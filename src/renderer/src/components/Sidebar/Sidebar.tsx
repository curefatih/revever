import React from "react";
import "./Sidebar.scss";

import cx from "classnames";

import {
  MdAddCircleOutline
} from "react-icons/md";


function Sidebar({ className, ...rest }: { className?: string }) {
  return (
    <div className={cx('sidebar', className)} {...rest}>
      <ul className="top-list">
        <li className="sidebar-item wrap xl-flexbox xl-gutter-8">
          <div className="col">
            <MdAddCircleOutline size="1.6rem" />
          </div>
          <span className="col">Add new source</span>
        </li>

      </ul>
      <h5 className="head">Recent Sources</h5>
      <ul className="recent-sources">
        <li className="source-item wrap"><span className="col">/home/pacman</span></li>
        <li className="source-item wrap"><span className="col">/home/pacman</span></li>
      </ul>
    </div>
  )
}

export default Sidebar;