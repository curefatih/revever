const path = require('path')
const git = require('isomorphic-git')
const fs = require('fs')

export default async function getFiles(repoPath: string, ref: string) {

  const files = git.listFiles({
    fs,
    dir: repoPath,
    ref
  })

  return files;
}