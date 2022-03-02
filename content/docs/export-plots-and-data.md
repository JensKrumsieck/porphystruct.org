---
title: Export Plots and Data
category: cd697a60-9cab-48ea-ac79-876466906b99
priority: 0
image: /analysis.svg
---
### Introduction

After an analysis is finished, the evaluation of the data begins. In the right part of the window the analysis parameter values are shown, furthermore the deflection diagram is a central part of the display. This section deals with the export of these data.

### Export Data

To export the analysis data the "Save" Button must be clicked, opening the save dialog. Some Options are preselected already. These options are - in our opinion - the data you need to export. The separate export types are described below.

On clicking "Save" the software will save all files in the same directory the molecule file came from (assuming the filename field was not altered by the user). The filenames will have a suffix describing the content.

![Save File Dialog](/uploads/save-dialog.png)

#### Graph

Graph (.png/.svg) will save the displacement diagram as shown in the GUI. The filename will be suffixed "_graph". A .png (Portable Network Graphics)-File is a raster image file with alpha channel support. A .svg (Scalable Vector Graphics) File is a text-based vector graphics (lossless quality) file. SVG files are clearly the better option, as they are vector graphics. Did you know: Microsoft Office supports SVG files in recent versions 😎. SVG files can be converted to other vector based formats like .eps or .emf with softwares like InkScape or Affinity Designer. The Images size defaults to 3000px x 1500 px with a DPI of 300.

![Exported Graph](/uploads/295698_graph.svg)

#### Analysis

Analysis (.md/.json/.png/.svg) offers 4 different options to export the analysis data. For .png and .svg files, the same applies as in the previous section. The .md (Markdown) File is a text file, which can be opened with any text editor (even notepad.exe), but can also be rendered to .html or other formats easily ([like this page, which is also a .md file](https://github.com/JensKrumsieck/porphystruct.org/tree/master/content/docs)). The .md File contains the analysis data (simulation, cavity, distances, angles and dihedrals) in a human readable format. A .json file contains the same data but in a machine readable format. JSON stands for JavaScript Object Notation. With this file, automated merging is possible (these are used by i.e. Batch Processing Feature of PorphyStruct)

![Analysis with minimal Basis](/uploads/295698_analysis.svg)

The first lines of the markdown file are shown here:

```
### Simulation
* Doming: -0.727 Å
* Saddling: 0.104 Å
* Ruffling: 0.203 Å
* WavingX: -0.070 Å
* WavingY: 0.021 Å
* Propellering: -0.006 Å
* Doop (exp.): 0.769 Å
* Doop (sim.): 0.767 Å
[...]
```