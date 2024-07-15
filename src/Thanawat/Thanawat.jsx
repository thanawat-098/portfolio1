import "./Thanawat.css";
import pf from "./pf.png";
import pf1 from "./pf1.png";
import pf2 from "./pf2.png";
import pf3 from "./pf3.png";
import pf4 from "./pf4.png";
import pf5 from "./pf5.png";
import pf6 from "./pf6.png";
import pf7 from "./pf7.png";
import pf8 from "./pf8.png";
import pf9 from "./pf9.png";
import pf10 from "./pf10.png";

function Thanawat() {
  return (
    <section className="th1">
      <div className="th1-1">
        <div className="th2">
          <img className="th2-2" src={pf} />
        </div>
        <div className="th3 animate__animated animate__backInDown">
          Thanawat Srakaew
        </div>
      </div>

      <div className="th4 animate__animated animate__backInLeft">
        <h3>
          Contact: <br />
          Birthday: 05/25/2000 <br /> age: 24 year Phon: 0989598354 <br />{" "}
          E-mail : mos0989598354@gmail.com{" "}
        </h3>
      </div>

      <div className="th4 animate__animated animate__backInRight">
        <h3>
          Education: <br /> Kasetsart University 2019-2023 Bachelor of
          Engineering Program in Computer Engineer
        </h3>
      </div>

      <div className="th4 animate__animated animate__backInLeft">
        <h3>
          Skills: <br />
          HTML <br />
          CSS <br />
          JAVASCRIPT <br />
          MYSQL <br />
          REACT.JS <br /> NODE.JS <br /> PHP
        </h3>
      </div>

      <div className="th5 animate__animated animate__backInUp">
        <h3>Projects</h3>
        <div className="th6 animate__animated animate__backInUp">
          <img className="th7" src={pf1} />
          <img className="th7" src={pf2} />
          <img className="th7" src={pf3} />
          <img className="th7" src={pf4} />
          <img className="th7" src={pf5} />
          <img className="th7" src={pf6} />
          <img className="th7" src={pf7} />
          <img className="th7" src={pf8} />
          <img className="th7" src={pf9} />
          <img className="th7" src={pf10} />
        </div>
        <div className="th7-1">
          <a className="th8">React</a>
          <a className="th8">Node.js</a>
          <a className="th8">Mysql</a>
          <div className="th9">
            <a className="th8" href="https://github.com/thanawat-098/web">
              https://github.com/thanawat-098/web
            </a>
          </div>
        </div>
      </div>
    </section>

    // <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
    //         <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
    //         <p className="text-lg mb-8">I am a passionate web developer ready to take on new challenges!</p>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="bg-card p-6 rounded-lg">
    //             <h2 className="text-xl font-bold mb-2">Projects</h2>
    //             <p className="text-lg mb-4">Check out some of my latest projects:</p>
    //             <div className="border border-border p-4 rounded-lg">
    //                 <h3 className="text-lg font-bold mb-2">Project 1</h3>
    //                 <p className="text-sm text-muted-foreground mb-2">Description of Project 1</p>
    //                 <img src="https://openui.fly.dev/openui/300x200.svg?text=Project+1" alt="Project 1" className="mb-2" />
    //                 <a href="#" className="text-primary hover:underline">View Project</a>
    //             </div>
    //             <div className="border border-border p-4 rounded-lg mt-4">
    //                 <h3 className="text-lg font-bold mb-2">Project 2</h3>
    //                 <p className="text-sm text-muted-foreground mb-2">Description of Project 2</p>
    //                 <img src="https://openui.fly.dev/openui/300x200.svg?text=Project+2" alt="Project 2" className="mb-2" />
    //                 <a href="#" className="text-primary hover:underline">View Project</a>
    //             </div>
    //         </div>

    //         <div className="bg-card p-6 rounded-lg">
    //             <h2 className="text-xl font-bold mb-2">About Me</h2>
    //             <p className="text-lg mb-4">Get to know me better:</p>
    //             <img src="https://openui.fly.dev/openui/300.svg?text=Profile+Picture" className="rounded-full mb-4" />
    //             <p className="text-sm text-muted-foreground mb-2">I am a web developer with a passion for creating amazing web experiences.</p>
    //             <a href="#" className="text-primary hover:underline">Learn More</a>
    //         </div>
    //     </div>
    //     </div>
  );
}

export default Thanawat;
