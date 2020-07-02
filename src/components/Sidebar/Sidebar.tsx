import React, { useRef, useEffect, ReactElement } from "react";
import "./Sidebar.scss";

import cx from "classnames";

import {
  MdAddCircleOutline
} from "react-icons/md";

import {
  GoRepo
} from "react-icons/go";



function Sidebar({ className, ...rest }: { className?: string }) {
  const folderInputRef = useRef(null);


  useEffect(() => {
    if (folderInputRef !== null && folderInputRef.current !== null) {
      (folderInputRef.current as any).webkitdirectory = true;
      (folderInputRef.current as any).directory = true;
      // folderInputRef.current.directory = true;
    }
  }, [folderInputRef])
  return (
    <div className={cx('sidebar', className)} {...rest}>
      <ul className="top-list">
        <li className="sidebar-item wrap xl-flexbox xl-gutter-8">
          <div className="col">
            <MdAddCircleOutline size="1.6rem" />
          </div>
          {/* <input type="file" id="dirs" style={{ display: "none" }} onChange={(e) => console.log("DIR:", e.target.files )} ref={folderInputRef} />
          <label className="col" htmlFor="dirs">Add new source</label> */}
          <span
            className="col"
            onClick={() => {
              // @ts-ignore
              if (window.ipc)
              // @ts-ignore
                console.log(ipc.sendSync('select-dir', 'ping')) // prints "pong"

            }}
          >Add new source</span>
        </li>

      </ul>
      <h5 className="head">Recent Sources</h5>
      <ul className="recent-sources">
        <li className="source-item wrap">
          <div className="col"><GoRepo size="1.2em" /></div>
          <span className="col">pacman</span>
        </li>
        <li className="source-item wrap">
          <div className="col"><GoRepo size="1.2em" /></div>
          <span className="col">revever</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;