<!-- =============================
     ABOUT
    ============================== -->

\begin{section}{title="JuliaReach Days 3", name="Welcome"}

\lead{Welcome to the third edition of JuliaReach Days!}

The purpose of this event is to bring together people working on reachability analysis
or people interested in such, to exchange ideas, share results and discuss open problems.

JuliaReach days 3 will be between **9th and 11th December 2021, fully online**, with
connection details coming soon.

During the event, we will follow the [JuliaCon code of conduct](https://juliacon.org/2021/coc/).
Violations of code of conduct can be reported to `mforets [at] gmail [dot] com` and/or `luca [dot] ferranti [at] uwasa [dot] fi`.

\end{section}


<!-- ==============================
     GETTING STARTED
     ============================== -->
\begin{section}{title="Schedule"}

**Thursday, 9th December 2021**

\lead{All times are in UTC, convert the starting time to your timezone [here](https://arewemeetingyet.com/UTC/2021-12-09/14:00).}

\begin{center}
\begin{table}{class="table-striped"}
|Activity|When|
|:----:|:---:|
|Opening| 14h00 -- 14h20 |
|Overview of JuliaReach|14h20 -- 15h00|
|Invited Talks|15h00 -- 16h00|
| **Break** | 16h00 -- 17h00|
|Contributed Challenge Problems|17h00 -- 19h00|
\end{table}
\end{center}
\\
\\
**Friday, 10th December 2021**

\lead{All times are in UTC, convert the starting time to your timezone [here](https://arewemeetingyet.com/UTC/2021-12-09/13:00).}

\begin{center}
\begin{table}{class="table-striped"}
|Activity|When|
|:----:|:----:|
|Invited Talks |13h00 -- 14h00|
|Overview of JuliaIntervals |14h00 -- 16h00|
| **Break**|16h00 -- 17h00 |
|JuliaIntervals Round Table |17h00 -- 19h00|
\end{table}
\end{center}

\end{section}



<!-- ==============================
     HACKATHON
     ============================== -->
\begin{section}{title="Challenges"}
    There will be a hackathon going on during the event. More info coming soon.
\end{section}


<!-- =============================
     Detailed program
    ============================== -->

\begin{section}{title="Detailed program"}

**Thursday, 9th December 2021**

\lead{All times are in UTC, convert the starting time to your timezone [here](https://arewemeetingyet.com/UTC/2021-12-09/14:00).}

\begin{center}
\begin{table}{class="table-striped"}
|When|Activity| Speaker(s) |
|:---|:---:|:---:|
|14h00 -- 14h20 |*Opening*| Marcelo Forets and Luca Ferranti|
|14h20 -- 15h00| Overview of JuliaReach <details><summary>Abstract</summary>TBA</details>|Marcelo Forets, Luis Benet|
|15h00 -- 15h30|**Invited talk 1**: TBA<details><summary>Abstract</summary>TBA</details>|Christian Schilling|
|15h30 -- 16h00|**Invited talk 2**: *Exploring synergies between a proof and reachability based hybrid system verification* <details><summary>Abstract</summary>This talk presents a joint work on integrating JuliaReach and reachability analysis into a refinement and proof-based system modelling and verification framework - Event-B. In particular, the talk attempts to demonstrate how reachability analysis can help to increase the verification automation of the hybrid system development in Event-B. </details>| Paulius Stankaitis|
|16h00 -- 17h00|**Break**| 🍕 |
|17h00 -- 17h20|**Challenge Problem 1**: *A nonlinear truss structural dynamics problem using reachability analysis* <details><summary>Abstract</summary>In this challenge, a simple truss-structure linear/nonlinear dynamics problem will be presented, where in the nonlinear case, large displacements are considered [[1]](https://raw.githubusercontent.com/ONSAS/libroANLE/main/tex/libroANLE.pdf#subsection.4.3.1). Basic Finite Element Method and Solid Dynamics concepts will be exposed, as well as the gold-standard numerical integration techniques. The recent application of Reachability Analysis to the linear case will be recalled [[2]](https://arxiv.org/pdf/2105.05841.pdf). The numerical results for the linear case using numerical integration and reachability will be obtained. Finally the nonlinear case problem will be clearly posed allowing to discuss possible novel approaches using reachability analysis.</details>|Jorge Pérez Zerpa|
|17h20 -- 17h40 | **Challenge Problem 2**: *Robust control problem by scenario optimization* <details><summary>Abstract</summary>TBA</details>|Roberto Rocchetta|
|17h40 -- 18h00 | **Challenge Problem 3**: *Platoon of unycicle vehicles* <details><summary>Abstract</summary>TBA</details>|Arvind Adimoolam|
|18h00 -- 18h20 | **Challenge Problem 4**:  *Nonlinear model of F16 flight dynamics* <details><summary>Abstract</summary>TBA</details>| Raktim Bhattacharya|
|18h20 -- 18h40 | **Challenge Problem 5**:   <details><summary>Abstract</summary>TBA</details>| Leonardo Barboni|
|18h40 -- 19h00 | **Challenge Problem 6**:   <details><summary>Abstract</summary>TBA</details>| Jorge Pérez-Hernández|
\end{table}
\end{center}

\\
\\
**Friday, 10th December 2021**

\lead{All times are in UTC, convert the starting time to your timezone [here](https://arewemeetingyet.com/UTC/2021-12-09/13:00).}

\begin{center}
\begin{table}{class="table-striped"}
|When|Activity|Speaker(s)|
|:----|:----:|:--------:|
|13h00 -- 13h30|**Invited talk 3**: *Using Intersection of Unions to Minimize Multi-directional Linearization Error in Reachability Analysis* <details><summary>Abstract</summary>Given an initial set of a nonlinear system with uncertain parameters and inputs, the set of states that can possibly be reached is computed. The approach is based on local linearizations of the nonlinear system, while linearization errors are considered by Lagrange remainders. These errors are added as uncertain inputs, such that the reachable set of the locally linearized system encloses the one of the original system. The linearization error is controlled by splitting of reachable sets. Reachable sets are represented by zonotopes, allowing an efficient computation in relatively high-dimensional space. </details>|Arvind Adimoolam|
|13h30 -- 14h00 | **Invited talk 4**: *Soft-constrained interval predictor models and epistemic reliability intervals: A new tool for uncertainty quantification with limited experimental data* <details><summary>Abstract</summary>TBA</details>|Roberto Rocchetta|
|14h00 -- 16h00 |Overview of JuliaIntervals <details><summary>Abstract</summary>TBA</details>|Luis Benet, Luca Ferranti, David Sanders|
|16h00 -- 17h00 |**Break**|🍕 |
|17h00 -- 19h00|**Round table**: *IntervalArithmetic.jl status and roadmap* <details><summary>Abstract</summary>TBA</details>|everyone willing to discuss|
\end{table}
\end{center}

\end{section}

<!-- =============================
      INVITED SPEAKERS
    ============================== -->

\begin{section}{title="Invited speakers"}

\begin{columns}
\begin{column}{colclass="col-md-4"}
\figure{path="assets/speakers-img/schilling.jfif", imgclass="img-invited"}\\
**[Christian Schilling](https://schillic.github.io/)**\\
*Aalborg University, Denmark*
\end{column}
\begin{column}{colclass="col-md-8"}
- **Title**: *TBA*\\
- **Abstract**: TBA
- **Bio**: TBA
\end{column}
\end{columns}

\\
\\

\begin{columns}
\begin{column}{colclass="col-md-4"}
\figure{path="assets/speakers-img/Paulius_Stankaitis.jpg", imgclass="img-invited"}\\
**[Paulius Stankaitis](https://dblp.org/pid/174/1117.html)**\\
*Newcastle University, United Kingdom*
\end{column}
\begin{column}{colclass="col-md-8"}
- **Title**: *Exploring synergies between a proof and reachability based hybrid system verification*\\
- **Abstract**: This talk presents a joint work on integrating JuliaReach and reachability analysis into a refinement and proof-based system modelling and verification framework - Event-B. In particular, the talk attempts to demonstrate how reachability analysis can help to increase the verification automation of the hybrid system development in Event-B.
- **Bio**: Paulius Stankaitis is a Research Associate and member of Advanced Model-Based Engineering and Reasoning research group at Newcastle University (Newcastle upon Tyne, United Kingdom). His research focuses on the development of formal techniques for modelling and verification of safe cyber-physical systems. Prior to the postdoctoral position, Paulius worked on a formal verification of railway signalling systems.
\end{column}
\end{columns}

\\
\\

\begin{columns}
\begin{column}{colclass="col-md-4"}
\figure{path="assets/speakers-img/Arvind.jpg", imgclass="img-invited"}\\
**[Arvind Adimoolam](https://www.linkedin.com/in/arvind-adimoolam-425a1932/)**\\
*Indian Institute of Technology (IIT) Kanpur, India*
\end{column}
\begin{column}{colclass="col-md-8"}
- **Title**: *Using Intersection of Unions to Minimize Multi-directional Linearization Error in Reachability Analysis*
- **Abstract**: Given an initial set of a nonlinear system with uncertain parameters and inputs, the set of states that can possibly be reached is computed. The approach is based on local linearizations of the nonlinear system, while linearization errors are considered by Lagrange remainders. These errors are added as uncertain inputs, such that the reachable set of the locally linearized system encloses the one of the original system. The linearization error is controlled by splitting of reachable sets. Reachable sets are represented by zonotopes, allowing an efficient computation in relatively high-dimensional space.
- **Bio**:
\end{column}
\end{columns}

\\
\\

\begin{columns}
\begin{column}{colclass="col-md-4"}
\figure{path="assets/speakers-img/Roberto.jpg", imgclass="img-invited"}\\
**[Roberto Rocchetta](https://www.linkedin.com/in/roberto-rocchetta-737b857a/)**\\
*Technical University of Eindhoven, Netherlands*
\end{column}
\begin{column}{colclass="col-md-8"}
- **Title**: *Soft-constrained interval predictor models and epistemic reliability intervals: A new tool for uncertainty quantification with limited experimental data*
- **Abstract**:
- **Bio**:  Dr Roberto Rocchetta works as a post-doc at the department for mathematics and computer science at the Technical University of Eindhoven on a collaborative project with Philips. He holds a Master in Energy Engineering from the University of Bologna, a Master of research in decision-making under risk and uncertainty from the University of Liverpool, and a PhD in reliability engineering, also from the University of Liverpool. His PhD thesis, defended in December 2018, dealt with several important aspects of uncertainty quantification and analysis of complex systems and critical infrastructures. Before joining the University of Eindhoven, he worked for one year at the National Institute of Aerospace (NIA) in a joint project with NASA Langley. There he focused on the development of data-driven decision-making tools for reliability-based and risk-based design optimization. Rocchetta’ s research is highly multidisciplinary and combines ideas from system reliability engineering, statistical learning theory, stochastic optimization, uncertainty quantification and machine learning.
\end{column}
\end{columns}

\end{section}

<!-- =============================
     Organisers
    ============================== -->

\begin{section}{title="Committees"}

\lead{Organising committee}

\begin{center}
\begin{columns}
\begin{column}{colclass="col-sm-4"}
\figure{path="assets/speakers-img/forets.png", imgclass="img-organiser"}\\
**[Marcelo Forets](https://mforets.github.io/)**\\
*Universidad de la República, Uruguay*
\end{column}
\begin{column}{colclass="col-sm-4"}
\figure{path="assets/speakers-img/ferranti.jpeg", imgclass="img-organiser"}\\
**[Luca Ferranti](https://lucaferranti.github.io)**\\
*University of Vaasa, Finland*
\end{column}
\end{columns}
\end{center}

\\
\\
\lead{Program committee}

\begin{center}
\begin{columns}
\begin{column}{colclass="col-sm-4"}
\figure{path="assets/speakers-img/schilling.jfif", imgclass="img-organiser"}\\
**[Christian Schilling](https://schillic.github.io/)**\\
*Aalborg University, Denmark*
\end{column}
\begin{column}{colclass="col-sm-4"}
\figure{path="assets/speakers-img/Jorge_Perez.png", imgclass="img-organiser"}\\
**[Jorge Pérez](https://www.fing.edu.uy/~jorgepz/)**\\
*Universidad de la República, Uruguay*
\end{column}
\begin{column}{colclass="col-sm-4"}
\figure{path="assets/speakers-img/forets.png", imgclass="img-organiser"}\\
**[Marcelo Forets](https://mforets.github.io/)**\\
*Universidad de la República, Uruguay*
\end{column}
\begin{column}{colclass="col-sm-4"}
\figure{path="assets/speakers-img/ferranti.jpeg", imgclass="img-organiser"}\\
**[Luca Ferranti](https://lucaferranti.github.io)**\\
*University of Vaasa, Finland*
\end{column}
\end{columns}
\end{center}

\end{section}

\begin{section}{title="Participants"}

~~~<div id="map"></div>~~~
\end{section}