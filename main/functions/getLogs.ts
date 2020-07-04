const path = require('path')
const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')
const fs = require('fs')

export default async function getLogs(repoPath: string, depth?: number) {
  
  let commits = await git.log({
    fs,
    dir: repoPath,
    depth,
  })
  
  return commits;
}