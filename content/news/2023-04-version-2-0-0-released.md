---
title: Version 2.0.0 Released
author: Jens Krumsieck
tags:
  - f5cf8734-b29e-439c-b746-a71cfdbd5044
  - e10f3b24-3ea0-47a5-a15e-119bb903a032
date: 2023-04-10T21:49:28.021Z
---
## Download ["PorphyStruct.exe"](https://github.com/JensKrumsieck/PorphyStruct/releases/download/v2.0.0/PorphyStruct.exe)

## Version 2

Initially i wanted the next version to be an 1.1.x Release, but things went different.

The whole code for loading molecules changed to be more performant with less memory allocation - which is beneficial for larger files such as biomolecules. 
Also the molecule-class is now derived from undirected graphs which enables graph theory for molecules, which led to a new automated detection algorithm using subgraph isomorphism. The detection is not only faster than before but also able to detect the macrocyclic type. That also means that files with mixed macrocyclic types such as f-Block Metallocorrole-Phthalocyanine sandwiches can be analyzed more easily. Also PorphyStruct is now able to detect both corrole units in beta-fused dimers which was not possible before. 
PorphyStruct now also comes with a CLI (command line interface) which makes it easy to use in automated pipelines and on any system.

There are also a lot of bugfixes like the wrong corrphycene reference in Issue #85.
All references are now forced to follow the same direction for the modes of both sets. so if e.g. doming1 is positive and doming2 negative they are eliminating each others strength!

The Webversion - as sharing most of the code - will also benefit from all changes (right now!) So you can already test the improvements here: https://app.porphystruct.org/

As this is a Beta Version there may be some bugs - if you find any, please report them ;)

## What's Changed

* CLI by @JensKrumsieck in https://github.com/JensKrumsieck/PorphyStruct/pull/72
* 2.0.x Update by @JensKrumsieck in https://github.com/JensKrumsieck/PorphyStruct/pull/78
* Bump Microsoft.NET.Test.Sdk from 17.4.0 to 17.4.1 by @dependabot in https://github.com/JensKrumsieck/PorphyStruct/pull/90

**Full Changelog**: https://github.com/JensKrumsieck/PorphyStruct/compare/v1.0.3...v2.0.0

### CLI

CLI Files (not required if you not plan to use the CLI!!!):
The ZIP File contains Builds for Windows, Mac OS and Linux x64 Systems as well as Linux ARM and a net6.0 dependent version ("Portable")
Delete uneccessary files after unpacking.

Usage: 
`PorphyStruct.CLI.exe analyze "PATH/TO/YOUR_FILE.mol2" -x`
Leave out .exe for non windows versions, -x is for "use extended basis"



R﻿elease

<!--StartFragment-->

[Release 2.0.0 · JensKrumsieck/PorphyStruct (github.com)](https://github.com/JensKrumsieck/PorphyStruct/releases/tag/v2.0.0)

<!--EndFragment-->