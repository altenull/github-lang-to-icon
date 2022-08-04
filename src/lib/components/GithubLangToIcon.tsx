import React from 'react';
import { GithubLang, LowercasedGithubLang } from '../models/github-lang.model';
import { IconProps } from '../models/icon-props.model';
import IconC from './IconC';
import IconClojure from './IconClojure';
import IconCoffeeScript from './IconCoffeeScript';
import IconCPlusPlus from './IconCPlusPlus';
import IconCSharp from './IconCSharp';
import IconCSS from './IconCSS';
import IconDart from './IconDart';
import IconElixir from './IconElixir';
import IconElm from './IconElm';
import IconErlang from './IconErlang';
import IconFSharp from './IconFSharp';
import IconGo from './IconGo';
import IconGroovy from './IconGroovy';
import IconHaskell from './IconHaskell';
import IconHTML from './IconHTML';
import IconJava from './IconJava';
import IconJavaScript from './IconJavaScript';
import IconJulia from './IconJulia';
import IconKotlin from './IconKotlin';
import IconLua from './IconLua';
import IconMarkdown from './IconMarkdown';
import IconMATLAB from './IconMATLAB';
import IconNix from './IconNix';
import IconObjectiveC from './IconObjectiveC';
import IconOCaml from './IconOCaml';
import IconPerl from './IconPerl';
import IconPHP from './IconPHP';
import IconPython from './IconPython';
import IconR from './IconR';
import IconRuby from './IconRuby';
import IconRust from './IconRust';
import IconScala from './IconScala';
import IconSCSS from './IconSCSS';
import IconShell from './IconShell';
import IconStylus from './IconStylus';
import IconSwift from './IconSwift';
import IconTypeScript from './IconTypeScript';
import IconVimScript from './IconVimScript';

interface Props extends Partial<IconProps> {
  lang: GithubLang | LowercasedGithubLang;
}

const langToIcon = (lang: GithubLang | LowercasedGithubLang, { size }: IconProps) => {
  const langToIconMap: Record<GithubLang | LowercasedGithubLang, React.ReactNode> = {
    C: <IconC size={size} />,
    c: <IconC size={size} />,
    Clojure: <IconClojure size={size} />,
    clojure: <IconClojure size={size} />,
    CoffeeScript: <IconCoffeeScript size={size} />,
    coffeescript: <IconCoffeeScript size={size} />,
    'C++': <IconCPlusPlus size={size} />,
    'c++': <IconCPlusPlus size={size} />,
    'C#': <IconCSharp size={size} />,
    'c#': <IconCSharp size={size} />,
    CSS: <IconCSS size={size} />,
    css: <IconCSS size={size} />,
    Dart: <IconDart size={size} />,
    dart: <IconDart size={size} />,
    Elixir: <IconElixir size={size} />,
    elixir: <IconElixir size={size} />,
    Elm: <IconElm size={size} />,
    elm: <IconElm size={size} />,
    Erlang: <IconErlang size={size} />,
    erlang: <IconErlang size={size} />,
    'F#': <IconFSharp size={size} />,
    'f#': <IconFSharp size={size} />,
    Go: <IconGo size={size} />,
    go: <IconGo size={size} />,
    Groovy: <IconGroovy size={size} />,
    groovy: <IconGroovy size={size} />,
    Haskell: <IconHaskell size={size} />,
    haskell: <IconHaskell size={size} />,
    HTML: <IconHTML size={size} />,
    html: <IconHTML size={size} />,
    Java: <IconJava size={size} />,
    java: <IconJava size={size} />,
    JavaScript: <IconJavaScript size={size} />,
    javascript: <IconJavaScript size={size} />,
    Julia: <IconJulia size={size} />,
    julia: <IconJulia size={size} />,
    Kotlin: <IconKotlin size={size} />,
    kotlin: <IconKotlin size={size} />,
    Lua: <IconLua size={size} />,
    lua: <IconLua size={size} />,
    Markdown: <IconMarkdown size={size} />,
    markdown: <IconMarkdown size={size} />,
    MATLAB: <IconMATLAB size={size} />,
    matlab: <IconMATLAB size={size} />,
    Nix: <IconNix size={size} />,
    nix: <IconNix size={size} />,
    'Objective-C': <IconObjectiveC size={size} />,
    'objective-c': <IconObjectiveC size={size} />,
    OCaml: <IconOCaml size={size} />,
    ocaml: <IconOCaml size={size} />,
    Perl: <IconPerl size={size} />,
    perl: <IconPerl size={size} />,
    PHP: <IconPHP size={size} />,
    php: <IconPHP size={size} />,
    Python: <IconPython size={size} />,
    python: <IconPython size={size} />,
    R: <IconR size={size} />,
    r: <IconR size={size} />,
    Ruby: <IconRuby size={size} />,
    ruby: <IconRuby size={size} />,
    Rust: <IconRust size={size} />,
    rust: <IconRust size={size} />,
    Scala: <IconScala size={size} />,
    scala: <IconScala size={size} />,
    SCSS: <IconSCSS size={size} />,
    scss: <IconSCSS size={size} />,
    Shell: <IconShell size={size} />,
    shell: <IconShell size={size} />,
    Stylus: <IconStylus size={size} />,
    stylus: <IconStylus size={size} />,
    Swift: <IconSwift size={size} />,
    swift: <IconSwift size={size} />,
    TypeScript: <IconTypeScript size={size} />,
    typescript: <IconTypeScript size={size} />,
    'Vim Script': <IconVimScript size={size} />,
    'vim script': <IconVimScript size={size} />,
  };

  return langToIconMap[lang];
};

const GithubLangToIcon: React.FC<Props> = ({ lang, size = 128 }: Props) => {
  return <>{langToIcon(lang, { size })}</>;
};

export default GithubLangToIcon;
