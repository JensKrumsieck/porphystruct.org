---
title: The Minimal and Extended Basis
category: cd697a60-9cab-48ea-ac79-876466906b99
priority: 0
image: /uploads/extendedsim.png
---
After[ completing the first analysis](https://porphystruct.org/docs/analyzing-porphyrinoids) with Copper Corrole [KAGGIJ from CCDC](https://www.ccdc.cam.ac.uk/structures/Search?Ccdcid=202423&DatabaseToSearch=Published) the attentive reader noticed, that the simulated Out-of-Plane Distortion Parameter Doop (sim.) and the experimental one Doop (exp.) differ by 0.119 Å, which is about 14% of the experimental value.

![Doop Value differs](/uploads/doop.png)

To see the out-of-plane distortion of the simulated structure, you can click "Simulation" in the top toolbar. A second graph will appear with less opacity showing, that the simulation does not quite fit with the experimental values. The fear has been proven true. (To indicate that a simulation is active, the menu item now has a blue background).



### The Minimal Basis

The simulation was done with the so called minimal basis. The minimal basis features only one set of reference structures - one for each characteristic mode: Doming, Saddling, Ruffling, Waving X & Y and Propellering. In most cases this is enough to describe the conformation properly. 

![Analysis and Simulation](/uploads/analysis_sim.png "Analysis and Simulation")

### The Extended Basis

The extended basis contains a second set of higher energy modes - suffixed with a 2 (e.g. Saddling2) . These will most likely fit the structure with no errors. Redoing the analysis of the Copper Corrole, the deviation becomes 0.001 Å and the simulated structure fits perfectly. 

![Simulation with Extended Basis](/uploads/extendedsim.png "Simulation with Extended Basis")

### Which one to pick?

If possible choose the minimal basis. This is a good choice in most cases and is easier to describe. If the Doop-Values differ to much, like about 3-5% of the Doop (exp.) Value one should use the extended basis. If you are not sure look at the simulation graph. If it gets significantly better, use the extended basis, if it's already fine, stick with the minimal basis.