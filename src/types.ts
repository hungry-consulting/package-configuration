// based on 
// a) http://wiki.commonjs.org/wiki/Packages/1.0
// b) https://docs.npmjs.com/files/package.json 

// TODO drop this type and use Record only
export type HashMap<K = string> = Record<string, K>

export type HashMapWithOptions<V extends string, K = string> = {
  [key in V]: K
}

type Script = string

interface Scripts {
  prepublish: Script
  publish: Script
  postpublish: Script
  preinstall: Script
  install: Script
  postinstall: Script
  preuninstall: Script
  uninstall: Script
  postuninstall: Script
  preversion: Script
  version: Script
  postversion: Script
  pretest: Script
  test: Script
  posttest: Script
  prestop: Script
  stop: Script
  poststop: Script
  prestart: Script
  start: Script
  poststart: Script
  prerestart: Script
  restart: Script
  postrestart: Script
}

interface Repository {
  type: 'git' | string
  url: string
  path: string
}

interface Bugs {
  url: string
  email: string
}

interface License {
  type: string
  url: string
}

type Licenses = License[]

interface Author {
  name: string
  email?: string
  url?: string
}

export interface PackageJSON {
  name: string
  url: string
  email: string
  version: string
  description: string
  dependencies: HashMap // per package spec there should be HashMap<HashMap> 
  devDependencies: HashMap
  peerDependencies: HashMap
  optionalDependencies: HashMap
  bundledDependencies: string[]
  keywords: string[]
  homepage: string
  bugs: Bugs
  license: License
  licenses: Licenses

  author: Author
  contributors: Author[]
  maintainers: Author[]

  main: string
  module: string
  bin: string | HashMap

  files: string[]
  man: string | string[]
  directories: HashMapWithOptions<string | 'lib' | 'bin'>

  repository: Repository
  repositories: Repository[]
  scripts: Scripts

  cpu: Array<string | 'x64' | 'ia32' | 'arm' | 'mips'>
  os: Array<string | 'linux' | 'os' | 'win' | 'darwin'>
  engines: Array<string | 'v8' | 'ejs' | 'node' | 'rhino'> | HashMap

  publishConfig: {
    tag: string
    registry: string
    access: string | 'public' | 'private'
  }

  private: boolean
  config: HashMap
}