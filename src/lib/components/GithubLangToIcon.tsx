import React from 'react';
import { GithubLang } from '../models/github-lang.model';

interface Props {
  lang: GithubLang;
}

const GithubLangToIcon: React.FC<Props> = ({ lang }: Props) => {
  return <div>GithubLangToIcon</div>;
};

export default GithubLangToIcon;
