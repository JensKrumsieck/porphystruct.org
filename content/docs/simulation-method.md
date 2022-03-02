---
title: Simulation Method
category: 5cd29771-9e69-4b3d-b96f-dedfdcdc1f08
priority: 0
---
### Introduction

The three-dimensional structure of each molecule `mathD_{obs}` is expressed by a linear combination of all `mathm` vibrational modes of symmetries `math\Gamma` with coefficients `mathd`. By rearranging the sum, a separation of the vibrational normal modes into out-of-plane (`mathoop`) and in-plane (`mathip`) symmetries can be made.

```math
D_{obs} = \sum_{\Gamma,m}d_m^{\Gamma} D_m^{\Gamma} = \sum_{\Gamma_{oop},m}d_m^{\Gamma_{oop}} D_m^{\Gamma_{oop}} + \sum_{\Gamma_{ip},m}d_m^{\Gamma_{ip}} D_m^{\Gamma_{ip}} = D_{obs}^{oop} + D_{obs}^{ip}
```
For non-linear molecules there are 3N-6 degrees of freedom which results 66 modes for the 24 framework atoms of the C<sub>20</sub>N<sub>4</sub> perimeter (Porphyrin, Porphycene, Corrphycene). For the C<sub>19</sub>N<sub>4</sub> (Corrole) and C<sub>18</sub>N<sub>4</sub> perimeter (Norcorrole) this results in 63 and 60 modes respectively. Of this 3N-6 modes N-3 modes are out-of-plane distortions (21 for Porphyrin) and 2N-3 modes (45 for Porphyrin) are in-plane distortions. 

### Porphyrin
The D<sub>4h</sub> point group contains 5 symmetries for each, out-of-plane and in-plane distortions (B<sub>2u</sub>, B<sub>1u</sub>, A<sub>2u</sub>, E<sub>g</sub>(x,y), A<sub>1u</sub>, and A<sub>1g</sub>, A<sub>2g</sub>, B<sub>1g</sub>, B<sub>2g</sub> and E<sub>u</sub>(x,y), respectively). These out-of-plane modes are distributed as follows:
```math
\Gamma_{oop} = 2A_{1u} + 3A_{2u}+3B_{1u}+3B_{2u}+5E_{g}
```
Each out-of-plane symmetry corresponds to a specific mode:
* Doming: `mathA_{2u}`
* Saddling: `mathB_{1u}`
* Ruffling: `mathA_{2u}`
* Waving: `mathE_{g}`
* Propellering: `mathA_{1u}`

To see the mode representations, [visit this site: Modes.](/docs/modes#porphyrin)

### Corrole
The C<sub>2v</sub> point group contains 2 symmetries for each, out-of-plane and in-plane distortions (B<sub>1</sub>, A<sub>2</sub> and A<sub>1</sub>, B<sub>2</sub> respectively). These out-of-plane modes are distributed as follows:
```math
\Gamma_{oop} = 10A_{2} + 10B_{1}
```
Each out-of-plane symmetry corresponds to a specific mode:
* Doming: `mathB_{1}`
* Saddling: `mathA_{2}`
* Ruffling: `mathB_{1}`
* Waving: `mathB_{1} & A_{2}`
* Propellering: `mathA_{2}`

To see the mode representations, [visit this site: Modes.](/docs/modes#corrole)

### Norcorrole
The D<sub>2h</sub> point group contains 4 symmetries out-of-plane(B<sub>3u</sub>, A<sub>u</sub>, B<sub>1g</sub> and B<sub>2g</sub>). These out-of-plane modes are distributed as follows:
```math
\Gamma_{oop} = 10A_{2} + 10B_{1}
```
Each out-of-plane symmetry corresponds to a specific mode:
* Doming: `mathB_{3u}`
* Saddling: `mathA_{u}`
* Ruffling: `mathB_{3u}`
* Waving: `mathB_{1g} & A_{2g}`
* Propellering: `mathA_{u}`

To see the mode representations, [visit this site: Modes.](/docs/modes#norcorrole)

### Simulation
#### Procedure
These modes are used as references when simulating the experimental structure (extended basis uses second set of modes). Die displacement vectors of each mode are created by calculating the mean square plane deviation for each atom of the reference structure. These 6 (or 12) vectors form the matrix `mathD_{oop}^{mxn}`. Using the Matrix QR Algorithm the following equation system is solved:
```math
\hat{D_{oop}} = \hat{d_{oop}} * D_{oop}^{mxn}
```
The solution `math\hat{d_{oop}}` beeing the coefficients of the linear combination which correspond to the mode strengths.

#### Displacement parameter
One important value is the overall displacement parameter `mathD_{oop}` which quantifies the overall out-of-plane distortion by using the euclidean norm of all atom displacements. The value is calculated as follows:
```math
D_{oop} = \sqrt(\sum_{i=1}^m(\Delta_i^z)^2
```

### Summary
||Doming|Saddling|Ruffling|Waving (X,Y)|Propellering|
|---|---|---|---|---|
|Porphyrin (D4h)|	A2u|	B1u|	B2u|	Eg|	A1u|
|Corrole (C2v)|B1|A2|B1|B1 / A2|A2|
|Norcorrole (D2h)|B3u|Au|B3u|B1g / B2g|Au|