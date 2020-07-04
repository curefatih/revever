import simpleGit, { SimpleGit } from 'simple-git';
// const Git: SimpleGit = simpleGit();

export default function getRepo(repoPath: string) {
  const Git: SimpleGit = simpleGit(repoPath, { binary: "git" })
  return Git;
  // .catch(err => console.log(err))
}