'use strict';

const Octokit = require('@octokit/rest');
const gitClone = require('git-clone');
const parseGhUrl = require('parse-github-url');
const cwd = process.cwd();

const octokit = new Octokit();

module.exports = async (url, location) => {
  try {
    let {owner, name, filepath} = parseGhUrl(url);

    let pull = await octokit.pulls.get({
      owner,
      repo: name,
      pull_number: filepath,
    });

    gitClone(`${pull.data.head.repo.html_url}.git`, `${cwd}/${location}`);
  } catch(err) {
    return err;
  }
}
