# github-lang-to-icon

<p align="center">
  <a href="https://www.npmjs.com/package/@altenull/github-lang-to-icon" target="_blank">
    <img src="https://img.shields.io/npm/v/@altenull/github-lang-to-icon?color=limegreen&logo=NPM" alt="@altenull/github-lang-to-icon package version" />
  </a>
  <a href="https://www.npmjs.com/package/@altenull/github-lang-to-icon" target="_blank">
    <img alt="npm weekly downloads" src="https://img.shields.io/npm/dw/@altenull/github-lang-to-icon?logo=npm&style=flat-square&color=007acc" />
  </a>
  <a href="https://github.com/altenull/github-lang-to-icon/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="github-lang-to-icon is released under the MIT license" />
  </a>
  <a href="https://reactjs.org/" target="_blank">
    <img  src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&logo=React&logoColor=white&color=61dafb" alt="React"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80&style=flat-square&logo=typescript" alt="Typescript"/>
  </a>
</p>

<p align="center">
  <b>React component that converts the GitHub language into an icon.</b><br />
</p>

## ⚙ Installation

```bash
$ npm install --save @altenull/github-lang-to-icon
```

## 🚀 Quick Start

```tsx
import { GithubLangToIcon } from '@altenull/github-lang-to-icon';

render() {
  return (
    <GithubLangToIcon
      lang="TypeScript"
      size={64}
    />
  );
}
```

### Props

|  Prop   |                Type                | Default |                     Description                     |
| :-----: | :--------------------------------: | :-----: | :-------------------------------------------------: |
| `lang`  | GithubLang \| LowercasedGithubLang |         | type LowercasedGithubLang = Lowercase\<GithubLang\> |
| `size`  |        number \| undefined         |   40    |                icon's width & height                |
| `style` |  React.CSSProperties \| undefined  |         |                                                     |

### Supported Languages

| GithubLang(type) |                                                  Icon(svg)                                                   |
| :--------------: | :----------------------------------------------------------------------------------------------------------: |
|       'C'        |                             <img width="40" height="40" src="./assets/c.svg" />                              |
|    'Clojure'     |                          <img width="40" height="40" src="./assets/clojure.svg" />                           |
|  'CoffeeScript'  |                        <img width="40" height="40" src="./assets/coffeescript.svg" />                        |
|      'C++'       |                            <img width="40" height="40" src="./assets/c++.svg" />                             |
|       'C#'       |                           <img width="40" height="40" src="./assets/csharp.svg" />                           |
|      'CSS'       |                            <img width="40" height="40" src="./assets/css.svg" />                             |
|      'Dart'      |                            <img width="40" height="40" src="./assets/dart.svg" />                            |
|     'Elixir'     |                           <img width="40" height="40" src="./assets/elixir.svg" />                           |
|      'Elm'       |                            <img width="40" height="40" src="./assets/elm.svg" />                             |
|     'Erlang'     |                           <img width="40" height="40" src="./assets/erlang.svg" />                           |
|       'F#'       |                           <img width="40" height="40" src="./assets/fsharp.svg" />                           |
|       'Go'       |                             <img width="40" height="40" src="./assets/go.svg" />                             |
|     'Groovy'     |                           <img width="40" height="40" src="./assets/groovy.svg" />                           |
|    'Haskell'     |                          <img width="40" height="40" src="./assets/haskell.svg" />                           |
|      'HTML'      |                            <img width="40" height="40" src="./assets/html.svg" />                            |
|      'Java'      |                            <img width="40" height="40" src="./assets/java.svg" />                            |
|   'JavaScript'   |                         <img width="40" height="40" src="./assets/javascript.svg" />                         |
|     'Julia'      |                           <img width="40" height="40" src="./assets/julia.svg" />                            |
|     'Kotlin'     |                           <img width="40" height="40" src="./assets/kotlin.svg" />                           |
|      'Lua'       |                            <img width="40" height="40" src="./assets/lua.svg" />                             |
|    'Markdown'    |                          <img width="40" height="40" src="./assets/markdown.svg" />                          |
|     'MATLAB'     |                           <img width="40" height="40" src="./assets/matlab.svg" />                           |
|      'Nix'       |                            <img width="40" height="40" src="./assets/nix.svg" />                             |
|  'Objective-C'   |                        <img width="40" height="40" src="./assets/objective-c.svg" />                         |
|     'OCaml'      |                           <img width="40" height="40" src="./assets/ocaml.svg" />                            |
|      'Perl'      |                            <img width="40" height="40" src="./assets/perl.svg" />                            |
|      'PHP'       | <img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" /> |
|     'Python'     |                           <img width="40" height="40" src="./assets/python.svg" />                           |
|       'R'        |                             <img width="40" height="40" src="./assets/r.svg" />                              |
|      'Ruby'      |                            <img width="40" height="40" src="./assets/ruby.svg" />                            |
|      'Rust'      |                            <img width="40" height="40" src="./assets/rust.svg" />                            |
|     'Scala'      |                           <img width="40" height="40" src="./assets/scala.svg" />                            |
|      'SCSS'      |                            <img width="40" height="40" src="./assets/scss.svg" />                            |
|     'Shell'      |                           <img width="40" height="40" src="./assets/shell.svg" />                            |
|     'Stylus'     |                           <img width="40" height="40" src="./assets/stylus.svg" />                           |
|     'Swift'      |                           <img width="40" height="40" src="./assets/swift.svg" />                            |
|   'TypeScript'   |                         <img width="40" height="40" src="./assets/typescript.svg" />                         |
|   'Vim Script'   | <img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" /> |

## 📝 License

Licensed under the [MIT](./LICENSE).
