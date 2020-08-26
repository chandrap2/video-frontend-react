import React, { Component } from 'react';
import User from "./User/User"
import VideoCard from "./VideoCard/VideoCard"
import logo from './logo.svg';
// import './App.css';

const apiURL = "https://1poxidle5i.execute-api.us-west-2.amazonaws.com/production";
class App extends Component {
  state = {
    user: "null",
    accounts: null,
    timeline: null
    // isSignedIn: false
  }

  // componentDidMount() {
  //   this.sendHttpGetReq("/verify")
  //   .then(res => (Object.keys(res).length != 0) ?
  //                 res : Promise.reject("Not signed in"))
  //   .then(res => this.setState({ user: res }))
  //   .catch(err => {
  //     console.log(err);
      
  //     this.waitForLogin()
  //       .then(res => this.sendHttpGetReq("/verify"))
  //       .then(res => this.setState({ user: res }))
  //       .catch(console.error);
  //   });
  // }

  render() {
    return (
      <div>
        <div id="title"> <h1>I want this video</h1> </div>
        <User signedIn={this.state.user}/>
        <VideoCard acc={{ name: "a", screen_name: "lol" }}/>
      </div>
    );
  }

  // async sendHttpGetReq(endpoint) {
  //   let response = await fetch(apiURL + endpoint, { credentials: "include" });
  //   response = await response.json();
  //   return response;
  // }

  // waitForLogin() {
  //   return new Promise(res => {
  //     let checkCookie = setInterval(async () => {
  //       // console.log("checking if cookies exist");

  //       this.sendHttpGetReq("/is_logged_in")
  //         .then(response => {
  //           // console.log("cookie check:", response);
  //           if (response.signedIn) {
  //             // console.log("cookies found");
  //             // auth_window.close();
  //             clearInterval(checkCookie);
  //             res();
  //           }
  //         });
  //     }, 1000);
  //   });
  // }

  // signedIn(user) {
  //   // console.log("signed in");
  //   // document.getElementById("tabs").style.display = "";
  //   // document.getElementById("accs").style.display = "none";
  //   // document.getElementById("timeline").style.display = "";

  //   this.showSignedInStatus(user)
  //   .then(res => {
  //     this.getAccs();
  //     this.getTimeline();
  //   })
  //   .catch(console.error);
  // }

  // showSignedInStatus(user) {
  //   // signinBtn.style.display = "none";

  //   // user_pic = document.getElementById("user-pic");
  //   // user_pic.setAttribute("src", getLargerProfPic(user.profile_image_url_https));
  //   // user_pic.style.display = "";

  //   // document.getElementById("signed-in").style.display = "";
  //   // document.getElementById("signed-in").style.paddingRight = "16px";
  //   // input.style.display = "";

  //   return Promise.resolve();
  // }

  // getAccs() {
  //   // console.log("getting accs");

  //   sendHttpGetReq("/get_accs")
  //   .then(res => {
  //     accs = res;

  //     if (accs.length > 0) {
  //       accs.forEach(acc => {
  //         let box = document.createElement("div");
  //         box.className = "result";
  //         let acc_header = getAccHeader(acc, box);

  //         box.appendChild(acc_header);
  //         box.appendChild(document.createElement("br"));

  //         acc.box = box;
  //       });
  //       console.log(`done processing, ${accs.length} accs found`);

  //       loadingAccs.style.display = "none";
  //       retrieveBtn.style.display = "";

  //       // ACC_LIMIT = accs.length;
  //       ACC_LIMIT = Math.min(accs.length, 200);
  //       // ACC_LIMIT = Math.min(accs.length, 50);
  //     } else {
  //       loadingAccs.style.display = "none";
  //       document.getElementById("no-accs").style.display = "";
  //     }
  //   });
  // }

  // getTimeline() {
  //   sendHttpGetReq("/get_timeline")
  //     .then(res => {
  //       timeline_tweets = res;
  //       let data = getVids(timeline_tweets);
  //       let df = document.createDocumentFragment();

  //       for (let tweet in data) {
  //         let user = timeline_tweets[tweet].user;

  //         let box = document.createElement("div");
  //         box.className = "result";
  //         let acc_header = getAccHeader(user, box);
  //         let vid_box = getVideoElem(data[tweet]);
  //         vid_box.style.display = "none";

  //         box.appendChild(acc_header);
  //         box.appendChild(document.createElement("br"));
  //         box.appendChild(vid_box);

  //         df.appendChild(box);
  //         df.appendChild(document.createElement("br"));
  //       }

  //       timeline_results.innerHTML = "";
  //       timeline_results.appendChild(df);
  //     });
  // }
}

// function App() {
//   return (
//     <div className="App">

//       <div id="title"> <h1>I want this video</h1> </div>

//       <div id="sign-in">
//         <div id="login-btn" class="big-button" style={{}}>Sign in</div>
//         <div id="signed-in" class="nonclickable" style={{}}>
//           Signed in as
//         <img id="user-pic" style={{}}></img>
//         </div>
//         <button id="logout-btn" class="big-button" style={{}}>Sign out</button>
//       </div>

//       <br/>

//         <div id="tabs" style={{}}>
//           <div id="tab-timeline" class="manipulator"
//             style={{color: "#638897", backgroundColor: "#ffffc9", padding: "12px", borderStyle: "solid", cursor: "auto"}}>
//             Timeline</div>

//           <div id="tab-accs" class="manipulator">Accounts</div>
//         </div>

//         <div id="accs" style={{}}>
//           <div id="input" style={{}}>
//             <p id="loading-accs" class="nonclickable">Loading</p>
//             <p id="no-accs" class="nonclickable" style={{}}>No accounts found</p>
//             <div id="retrieve" class="big-button" style={{}}>Retrieve videos</div>
//           </div>

//           <div id="flip-page" style={{}}>
//             <div class="flip manipulator" id="left"></div>
//             <div class="flip manipulator" id="right"></div>
//           </div>

//           <div id="results"> </div>
//         </div>

//         <div id="timeline" style={{}}>
//           <p id="loading-timeline" class="nonclickable" style={{}}>
//             Loading
//     </p>

//           <div id="timeline-results"> </div>
//         </div>

//     </div>
//   );
// }

export default App;
