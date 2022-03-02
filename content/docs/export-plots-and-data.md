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



`### Simulation`

`* Doming: -0.727 Å`

`* Saddling: 0.104 Å`

`* Ruffling: 0.203 Å`

`* WavingX: -0.070 Å`

`* WavingY: 0.021 Å`

`* Propellering: -0.006 Å`

`* Doop (exp.): 0.769 Å`

`* Doop (sim.): 0.767 Å`

`### Cavity`

`* Cavity size: 7.195 Å²`

`### Distances`

`* N1 - N3: 3.787 Å`

`* N2 - N4: 3.800 Å`

`* Mo - N1: 2.033 Å`

`* Mo - N2: 2.039 Å`

`* Mo - N3: 2.038 Å`

`* Mo - N4: 2.035 Å`

`* Mo - Mean Plane: -0.964 Å`

`* Mo - N4 Plane: 0.729 Å`

`### Angles`

`* N1 - Mo - N4: 74.948 °`

`* N2 - Mo - N3: 88.983 °`

`* C6 - C5 - C4: 123.307 °`

`* C16 - C15 - C14: 123.294 °`

`* C11 - C10 - C9: 126.149 °`

`* [N1-Mo-N4]x[N2-Mo-N3]: 56.941 °`

`### Dihedrals`

`* N1 - N2 - N3 - N4: -0.495 °`

`* C3 - C4 - C6 - C7: 11.821 °`

`* C2 - C1 - C19 - C18: 1.615 °`

`* C13 - C14 - C16 - C17: -20.930 °`

`* C8 - C9 - C11 - C12: 6.966 °`

`* C4 - N1 - N3 - C11: 7.288 °`

`* C9 - N2 - N4 - C16: -3.911 °`

`* N1 - C4 - C6 - N2: 3.501 °`

`* N1 - C1 - C19 - N4: 0.606 °`

`* N3 - C14 - C16 - N4: -6.155 °`

`* N2 - C9 - C11 - N3: 2.093 °`