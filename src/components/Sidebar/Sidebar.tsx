import React, { useRef, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addRepo, updateCommits } from "../../redux/actions";
import "./Sidebar.scss";

import cx from "classnames";

import {
  MdAddCircleOutline
} from "react-icons/md";

import {
  GoRepo
} from "react-icons/go";
import Modal from "../Modal/Modal";
import { getRepositories } from "../../redux/selectors";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state: any) => {
  return {
    repositories: getRepositories(state)
  };
};

const connector = connect(mapStateToProps, {
  addRepo,
  updateCommits
});

type PropsFromRedux = ConnectedProps<typeof connector>

type SidebarProps = PropsFromRedux & {
  className?: string,
}

function Sidebar(props: SidebarProps) {
  const folderInputRef = useRef(null);
  const [newRepoStatus, setNewRepoStatus] = useState({});
  const [modalShow, setModalShow] = useState(false);

  let history = useHistory();


  useEffect(() => {
    if (folderInputRef !== null && folderInputRef.current !== null) {
      (folderInputRef.current as any).webkitdirectory = true;
      (folderInputRef.current as any).directory = true;
    }
  }, [folderInputRef])

  const handleRepoClick = (repoPath: string) => {
    let result;

    // @ts-ignore
    if (window.ipcRenderer)
      // @ts-ignore
      result = ipcRenderer.sendSync('get-logs', repoPath)

    props.updateCommits({
      current: repoPath,
      ...result
    })

    history.push("/commits")
  }


  return (
    <div className={cx('sidebar', props.className)}>
      <ul className="top-list">
        <li className="sidebar-item wrap xl-flexbox xl-gutter-8"
          onClick={() => {
            let result;
            // @ts-ignore
            if (window.ipcRenderer)
              // @ts-ignore
              result = ipcRenderer.sendSync('add-source-dir', "")

            console.log(result);


            if (result.status == 1) {
              console.log("ADD REPO ???");

              props.addRepo(result)
            }

          }}>
          <div className="col">
            <MdAddCircleOutline size="1.6rem" />
          </div>
          <span
            className="col"
          >Add new source</span>
        </li>

      </ul>
      <h5 className="head">Recent Sources</h5>
      <ul className="recent-sources">

        {props.repositories.all.map((repo: string, index: number) => {
          const repoSplit = repo.split('/')
          return (
            <li
              key={index}
              className="source-item wrap"
              onClick={() => handleRepoClick(repo)}>
              <div className="col"><GoRepo size="1.2em" /></div>
              <span className="col">{repoSplit[repoSplit.length - 1]}</span>
            </li>
          )
        })}

        {!props.repositories.all.length ?
          <li className="wrap xl-center">
            <span className="col"><h6>no repo yet.</h6></span>
          </li>
          : null
        }
      </ul>

      {modalShow ?
        <Modal onClose={() => setModalShow(false)}>
          <div>
            {JSON.stringify(newRepoStatus)}
          </div>
        </Modal>
        : null}

    </div>
  )
}


export default connector(Sidebar);