<!-- =============================
     ABOUT
    ============================== -->

\begin{section}{title="JuliaReach & JuliaIntervals Days 3", name="Welcome"}

\lead{**Welcome!**}

This event will host talks from two Julia communities: [JuliaReach](https://github.com/JuliaReach) (reachability analysis)
and [JuliaIntervals](https://github.com/JuliaIntervals) (interval methods). The main goal is to bring together people
interested in foundations or applications of these topics by: disseminating
the current state of relevant Julia packages, organising development sprints and exchanging
ideas or discussing open problems.

The event will take place from **9th to 11th December 2021, fully online**.
Connection details will be sent upon registration.

\lead{**Registration**}

The event is free, but registration is required. Optionally, participants' information will be
displayed in the [world map of the Participants](#participants) section in this webpage. Upon registration, you should receive a confirmation email. If you need to edit your form, follow the link provided in such email.

\lead{**Code of Conduct**}

*During the event, we will follow the [JuliaCon code of conduct](https://juliacon.org/2021/coc/).
Violations of code of conduct can be reported to `mforets [at] gmail [dot] com` and/or `luca [dot] ferranti [at] uwasa [dot] fi`.*

\end{section}


<!-- ==============================
     GETTING STARTED
     ============================== -->
\begin{section}{title="Schedule"}

**Thursday, 9th December 2021**

\lead{All times are in UTC, convert the starting time to your timezone [here](https://arewemeetingyet.com/UTC/2021-12-09/13:00).}

\begin{center}
\begin{table}{class="table-striped"}
|Activity|When|
|:----:|:---:|
|Opening| 13h00 -- 13h30 |
|Talks|13h30 -- 16h00|
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
|Talks |13h00 -- 16h00|
| **Break**|16h00 -- 17h00 |
|JuliaIntervals Round Table |17h00 -- 19h00|
\end{table}
\end{center}
\\
\\
**Saturday, 11th December 2021**

It is sprint time! During this day we will use online platforms (Discord, GitHub)
to create, discuss and implement solutions for the challenge problems, or other
problems that you have proposed during these Days.

\end{section}



<!-- ==============================
     HACKATHON
     ============================== -->
\begin{section}{title="Reachathon"}
    In the spirit of a [Hackathon](https://en.wikipedia.org/wiki/Hackathon), our
    *Reachathon* is allocated to discuss and implement exploratory solutions to programming
    tasks related to the workshop.

    Every contribution and initiative counts, from first-time contributors seeking guidance
    in ways to contribute to JuliaReach and JuliaIntervals packages, to developments of more
    advanced research topics or tools proposed in the Challenge problems
    session the first day of the workshop.
\end{section}


<!-- =============================
     Detailed program
    ============================== -->

\begin{section}{title="Program"}

**Thursday, 9th December 2021**


\lead{All times are in UTC, convert the starting time to your timezone [here](https://arewemeetingyet.com/UTC/2021-12-09/13:00).}

\begin{center}
\begin{table}{class="table-striped"}
|When|Activity| Speaker(s) |
|:---|:---:|:---:|
|13h00 -- 13h30 |*Opening*| Marcelo Forets and Luca Ferranti|
|13h30 -- 14h00|<details><summary>**Talk 1:** *Synthesis of hybrid automata from time-series data*</summary>A time series is a sequence of data points, each associated with a point in time. A hybrid automaton is a mathematical model of continuous dynamical systems with multiple operational modes. We present recent online and offline approaches to synthesize a hybrid automaton from a set of time series based on reachability analysis.</details>|Miriam García Soto|
|14h00 -- 14h30| <details><summary>**Talk 2:** *Exploring synergies between proof-based and reachability-based hybrid system verification*</summary>This talk presents a joint work on integrating JuliaReach and reachability analysis into a refinement and proof-based system modelling and verification framework - Event-B. In particular, the talk attempts to demonstrate how reachability analysis can help to increase the verification automation of the hybrid system development in Event-B. </details>| Paulius Stankaitis|
|14h30 -- 15h00| <details><summary>**Talk 3:** *The Yarkovsky effect for asteroid Apophis*</summary>The leading source of uncertainty to predict the orbital motion of asteroid (99942) Apophis is a non-gravitational acceleration arising from the anisotropic thermal re-emission of absorbed radiation, known as the Yarkovsky effect. Previous attempts to obtain this parameter from astrometry for this object have only yielded marginally small values, without ruling out a pure gravitational interaction. Here we present an independent estimation of the Yarkovsky effect based on optical and radar astrometry which includes observations obtained during 2021. Our approach is based on automatic differentiation techniques in terms of high-order Taylor series expansions both with respect to time and deviations with respect to a given orbital solution. Exploiting these techniques, we implement a Newton method for orbit determination, finding a non-zero Yarkovsky parameter, A2=(-2.899 ± 0.025) × 10-14 au/d2, with induced semi-major axis drift of (-199.0 ± 1.5) m/yr for Apophis. Finally, we discuss the impact hazard assessment problem for potentially hazardous asteroids and propose a parameterized orbit determination scheme, which allows to compute the time-evolution of the orbital uncertainty region via a high-order Taylor series parameterization.</details>|Jorge Pérez-Hernández|
|15h00 -- 16h00| <details><summary>**Talk 4:** *Overview of JuliaReach*</summary>We illustrate different aspects of the JuliaReach package ecosystem using examples from the Applied Verification for Continuous and Hybrid Systems competition (ARCH-COMP'2021). We outline possibilities for contributing to JuliaReach, including 2022 GSOC project ideas.</details>|Marcelo Forets|
|16h00 -- 17h00|**Break**| 🍕 |
|17h00 -- 17h20 |  <details><summary>**Challenge Problem 1:**  *Verification of Flight Control Algorithms Using Reachability Analysis*</summary>Aircraft manufacturers have reached a high level of expertise and experience in flight control law design. The current design and analysis techniques applied in industry enable flight control engineers to address virtually any realistic design challenge. However, the development of flight control laws from concept to validation is a very complex, multi-disciplinary task, and the many problems that have to be solved make it a costly and lengthy process. The certification or air-worthiness assessment can be seen as the final step of the flight control system design, which takes place when a mature controller design is available and is ready for flight tests. In the certification or clearance process, which includes verification and validation, it has to be proven that the flight control laws have been designed such that the aircraft is safe to fly throughout the whole flight envelope, under all parameter variability and failure conditions. The role of the certification process is to demonstrate, via exhaustive analyses, that a catalogue of selected criteria expressing stability and handling requirements is fulfilled. In this talk we will present how reachability analysis can be a viable approach for flight control certification.</details>| Raktim Bhattacharya|
|17h20 -- 17h40 |  <details><summary>**Challenge Problem 2:** *Platoon of unicycle vehicles*</summary>We consider a platoon of unicycle vehicles where the i-th vehicle follows the (i-1)-th  and the relative displacements between the vehicles are controlled by a state-dependent feedback. The challenge is to verify a time-dependent safety constraint on the lateral distance between the vehicles as well as a safety bound on the horizontal displacements.</details>|Arvind Adimoolam|
|17h40 -- 18h00 |  <details><summary>**Challenge Problem 3:** *Robust control problem by scenario optimization*</summary>In this challenge, we wish to prescribe a robust controller design that maximizes the probability of satisfactory performance (reliability) of a two-body spring system. An optimized controller must satisfy three reliability requirements, i.e., it must guarantee system stability, fast return to equilibrium (setting time), and low energy consumption (control effort). Note that stability, setting time and control effort are competitive requirements and, thus, a controller that minimizes the failure probability for one of the requirements inevitably increases the chance of failing the others. We provide samples and a numerical model for the system and the controller. The data and model must be used for the design evaluation and to characterize the uncertainty response of the system. Note that only a few samples are available to solve this problem, further complicating the uncertainty quantification and reliability assessment tasks.</details>|Roberto Rocchetta|
|18h00 -- 18h20| <details><summary>**Challenge Problem 4:** *A nonlinear truss structural dynamics problem using reachability analysis*</summary>In this challenge, a simple truss-structure linear/nonlinear dynamics problem will be presented, where in the nonlinear case, large displacements are considered [[1]](https://raw.githubusercontent.com/ONSAS/libroANLE/main/tex/libroANLE.pdf#subsection.4.3.1). Basic Finite Element Method and Solid Dynamics concepts will be exposed, as well as the gold-standard numerical integration techniques. The recent application of Reachability Analysis to the linear case will be recalled [[2]](https://arxiv.org/pdf/2105.05841.pdf). The numerical results for the linear case using numerical integration and reachability will be obtained. Finally the nonlinear case problem will be clearly posed allowing to discuss possible novel approaches using reachability analysis.</details>|Jorge Pérez Zerpa|
|18h20 -- 18h40| <details><summary>**Challenge Problem 5:** *Polynomial Zonotopes in Julia*</summary>For reachability of nonlinear differential equations, the non-convex set representation known as *polynomial zonotopes* has proved to be very competitive with respect to other approaches. Currently, polynomial zonotopes are only available in the Matlab tool [CORA](https://tumcps.github.io/CORA/). This challenge consists of implementing [sparse polynomial zonotopes](https://mediatum.ub.tum.de/doc/1591469/ijh936tu65rc82gdlzx53oe5f.PolynomialZonotopes_Journal.pdf) and set operations in the Julia library [LazySets.jl](https://github.com/JuliaReach/LazySets.jl). This will serve as a solid groundwork to building reachability methods in the future.</details>|Niklas Kochdumper|
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
|13h00 -- 13h30| <details><summary>**Talk 5:** *Using Intersection of Unions to Minimize Multi-directional Linearization Error in Reachability Analysis*</summary>Given an initial set of a nonlinear system with uncertain parameters and inputs, the set of states that can possibly be reached is computed. The approach is based on local linearizations of the nonlinear system, while linearization errors are considered by Lagrange remainders. These errors are added as uncertain inputs, such that the reachable set of the locally linearized system encloses the one of the original system. The linearization error is controlled by splitting of reachable sets. Reachable sets are represented by zonotopes, allowing an efficient computation in relatively high-dimensional space. </details>|Arvind Adimoolam|
|13h30 -- 14h00 |  <details><summary>**Talk 6:** *Soft-constrained interval predictor models and epistemic reliability intervals: A new tool for uncertainty quantification with limited experimental data*</summary>This talk presents a new identification framework for Interval Predictor Models (IPMs) and an optimization method that soften the scenario constraints and trade-off between reliability and accuracy of the predictions. IPMs give non-probabilistic (interval) characterization of random processes, are constructed directly from data, and with no assumptions on the distribution family of the uncertainty affecting data-generating mechanisms. The reliability of an IPM defines the probability of correct interval predictions for future samples, and its value is always unknown in practice (due to finite samples sizes and poor understanding of the uncertainty affecting the process). Scenario optimization theory is used in this work to prescribe epistemic bounds on the IPM's reliability. The reliability bounds hold distribution-free, non-asymptotically, and quantify the uncertainty in the predictive error of the model. We test the framework on various test examples and discuss its strengths and limitations.</details>|Roberto Rocchetta|
|14h00 -- 14h30 | <details><summary>**Talk 7:** *Confidence-based Contractor, Propagation and Potential Cloud for Differential Equations*</summary>A novel interval contractor based on the confidence assigned to a random variable is proposed. It makes it possible to consider at the same time an interval in which the quantity is guaranteed to be, and a confidence level to reduce the pessimism induced by interval approach. This contractor consists in computing a confidence region. Using different confidence levels, a particular case of potential cloud can be computed. As application, we propose to compute the reachable set of an ordinary differential equation under the form of a set of confidence regions, with respect to confidence levels on initial value. </details>|Julien A. dit Sandretto|
|14h30 -- 16h00 | <details><summary>**Talk 8:** *Overview of JuliaIntervals*</summary>This talk will give an overview of the packages inside the JuliaIntervals organisation, focusing on their current status, limitations and development. The talk will also give a general overview of interval arithmetic and the IEEE 1788-2015 standard for it. This will set grounds for discussion in the round table after the break. </details>|Luis Benet, Luca Ferranti, Benoît Richard, David Sanders|
|16h00 -- 17h00 |**Break**|🍕|
|17h00 -- 19h00| <details><summary>**Round table:** *JuliaIntervals status and roadmap*</summary>This will be an opportunity for everyone interested in the JuliaIntervals ecosystem to discuss about the current status of the organisation and brainstorm ideas for further development. Particular emphasis will be given to IntervalArithmetic.jl roadmap towards version 1.0.</details>|everyone willing to discuss|
\end{table}
\end{center}

\end{section}

<!-- =============================
      INVITED SPEAKERS
    ============================== -->

\begin{section}{title="Speakers"}

\begin{center}
     \begin{columns}
          \speakers{}
     \end{columns}
\end{center}

\end{section}

<!-- =============================
     Organisers
    ============================== -->

\begin{section}{title="Organisers"}

\begin{center}
\begin{columns}
\begin{column}{colclass="col-sm-3"}
\figure{path="assets/speakers-img/marcelo.jpg", imgclass="img-organiser"}\\
**[Marcelo Forets](https://github.com/mforets)**\\
*Universidad de la República, Uruguay*
\end{column}
\begin{column}{colclass="col-sm-3"}
\figure{path="assets/speakers-img/ferranti.jpeg", imgclass="img-organiser"}\\
**[Luca Ferranti](https://lucaferranti.github.io)**\\
*University of Vaasa, Finland*
\end{column}
\begin{column}{colclass="col-sm-3"}
\figure{path="assets/speakers-img/schilling.jfif", imgclass="img-organiser"}\\
**[Christian Schilling](https://www.christianschilling.net/)**\\
*Aalborg University, Denmark*
\end{column}
\begin{column}{colclass="col-sm-3"}
\figure{path="assets/speakers-img/Jorge_Perez.png", imgclass="img-organiser"}\\
**[Jorge Pérez](https://www.fing.edu.uy/~jorgepz/)**\\
*Universidad de la República, Uruguay*
\end{column}
\end{columns}
\end{center}

\end{section}

\begin{section}{title="Participants"}

~~~<div id="map"></div>~~~
\\
\lead{**List of participants**}
~~~
<div id="part_list"></div>
~~~
\end{section}
