import React, { useState } from "react";
import "./CommitList.scss"
import CommitCard from "../CommitCard/CommitCard";
import { connect, ConnectedProps } from "react-redux";
import { getCommits, getRepositories } from "../../redux/selectors";

import {
  FaSortNumericUp,
  FaSortNumericDown
} from "react-icons/fa";
import { useHistory } from "react-router-dom";


const mapStateToProps = (state: any) => {
  return {
    commits: getCommits(state),
    repositories: getRepositories(state)
  };
};

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>

type CommitListProps = PropsFromRedux & {
  className?: string,
  onClickSha?: Function
}

function CommitList(props: CommitListProps) {
  console.log("COMMITS:", props.commits);
  const [order, setOrder] = useState({ type: false });

  let history = useHistory();

  const handleShaClick = (data: { event: Event, sha: string }) => {
    history.push(`/files/${data.sha}`)
  }

  return (
    <div className="commit-list">
      {props.commits.data.length ?
        <div className="wrap xl-flexbox xl-middle xl-center xl-middle">
          <div className="col xl-7-12 xl-left" style={{ padding: "10px" }}>
            <h5>Commit message:</h5>
          </div>
          <div className="col xl-2-12 xl-left">
            <div className="order-button"
              onClick={() => {
                setOrder({ ...order, type: !order.type })
              }}>
              {order.type ? <FaSortNumericDown /> : <FaSortNumericUp />}
            </div>
          </div>
        </div>
        :
        <div className="wrap xl-center">
          <div className="col">
            <h3>no commit yet</h3>
          </div>
        </div>
      }
      {props.commits && props.commits.data && (order.type ? props.commits.data : props.commits.data.slice(0).reverse()).map((record: { [key: string]: any }, index: number) => {
        return (
          < div className="wrap xl-flexbox xl-middle xl-center" key={index} >
            <div className="col xl-7-12 xl-1-1 commit-card_wrapper" style={{ padding: "10px" }}>
              <CommitCard
                tree={record.commit.tree}
                message={record.commit.message}
                onClickSha={(e: any) => handleShaClick(e)} />
            </div>
            <div className="col xl-2-12 point"></div>
          </div>
        )
      })}
    </div >
  )
}

export default connector(CommitList);