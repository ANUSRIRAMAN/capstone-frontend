// import "./App.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import FacebookIcon from "@mui/icons-material/Facebook";
import { padding } from "@mui/system";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Markdown() {
  const [markDown, setMarkDown] = useState("");
  const clearValue = () => {
    setMarkDown("");
    const inputClear = document.querySelector("#floatingTextarea2");
    inputClear.value = "";
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
  };

  ////////logout

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");

    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: "50px" }}>
        <AppBar
          position="static"
          style={{ background: "linear-gradient(to right, #141e30, #243b55)" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ReactMarkdown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              user:
              {localStorage.getItem("username")}
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        className="input"
        style={{
          background: "linear-gradient(to right, #141e30, #243b55)",
          color: "white",
          paddingTop: "30px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <b>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INPUT</h3>
        </b>
        <Button
          variant="contained"
          style={{
            marginLeft: "500px",
            marginBottom: "10px",
            background: "red",
          }}
          onClick={clearValue}
        >
          Delete
        </Button>
        <b>
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PREVIEWER
          </h3>
        </b>
      </div>
      <div
        className="row"
        style={{ background: "linear-gradient(to right, #141e30, #243b55)" }}
      >
        <div className="col-lg-6">
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Type something"
              id="floatingTextarea2"
              style={{ height: "100vh", background: "black", color: "white" }}
              onChange={(e) => setMarkDown(e.target.value)}
            ></textarea>
            <label for="floatingTextarea2" color="white">
              Type something
            </label>
            {/* <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" ></input>
    <label for="floatingInput">type</label> */}
          </div>
        </div>
        <div
          className="col-lg-6"
          style={{
            height: "100vh",
            background: "white",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
      <br></br>

      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: "relative" }}>
          <button
            type="button"
            onClick={handleClick}
            style={{
              marginLeft: "100px",
              width: "400px",
              height: "40px",
              borderRadius: "5px",
              color: "white",
              border: "2px , Solid",
              borderColor: "gold",
              background: "linear-gradient(to right, #141e30, #243b55)",
            }}
          >
            CLick Me For Help
          </button>
          {open ? (
            <Box sx={styles}>
              <br></br>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td># Heading level 1</td>
                    <td>&lt;h1&gt;Heading level 1&lt;/h1&gt;</td>
                    <td>
                      <h1>Heading level 1</h1>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>## Heading level 2</td>
                    <td>&lt;h2&gt;Heading level 1&lt;/h2&gt;</td>
                    <td>
                      <h2>Heading level 2</h2>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>### Heading level 3</td>
                    <td>&lt;h3&gt;Heading level 3&lt;/h3&gt;</td>
                    <td>
                      <h3>Heading level 3</h3>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>#### Heading level 4</td>
                    <td>&lt;h4&gt;Heading level 4&lt;/h4&gt;</td>
                    <td>
                      <h4>Heading level 4</h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>##### Heading level 5</td>
                    <td>&lt;h5&gt;Heading level 5&lt;/h5&gt;</td>
                    <td>
                      <h5>Heading level 5</h5>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>###### Heading level 6</td>
                    <td>&lt;h6&gt;Heading level 6&lt;/h6&gt;</td>
                    <td>
                      <h6>Heading level 6</h6>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      Heading level 1<br></br>
                      ===============
                    </td>
                    <td>&lt;h1&gt;Heading level 1&lt;/h1&gt;</td>
                    <td>
                      <h1>Heading level 1</h1>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      Heading level 2 <br></br>
                      ---------------
                    </td>
                    <td>&lt;h2&gt;Heading level 2&lt;/h2&gt;</td>
                    <td>
                      <h2>Heading level 2</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>I just use **bold text**</td>
                    <td>I just use&lt;strong&gt;bold text&lt;/strong&gt;</td>
                    <td>
                      I just use <strong>bold text</strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>I just use *Italics*</td>
                    <td>I just use&lt;em&gt;Italics&lt;/em&gt;</td>
                    <td>
                      I just use <em>Italics</em>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>This text is ***really important***.</td>
                    <td>
                      This text is&lt;strong&gt;&lt;em&gt;really
                      important&lt;/em&gt;&lt;/strong&gt;
                    </td>
                    <td>
                      {" "}
                      This text is{" "}
                      <strong>
                        <em>really important</em>
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      - First item<br></br>- Second item<br></br>- Third item
                      <br></br>- Fourth item<br></br>
                    </td>
                    <td>
                      &lt;ul&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ul&gt;
                    </td>

                    <td>
                      {" "}
                      <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      * First item<br></br>* Second item<br></br>* Third item
                      <br></br>* Fourth item<br></br>
                    </td>
                    <td>
                      &lt;ul&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ul&gt;
                    </td>

                    <td>
                      {" "}
                      <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      + First item<br></br>+ Second item<br></br>+ Third item
                      <br></br>+ Fourth item<br></br>
                    </td>
                    <td>
                      &lt;ul&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ul&gt;
                    </td>

                    <td>
                      {" "}
                      <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>
                      - First item<br></br>- Second item<br></br>- Third item
                      <br></br> &nbsp;&nbsp;&nbsp; - Indented item<br></br>
                      &nbsp;&nbsp;&nbsp; - Indented item<br></br>- Fourth item
                      <br></br>
                    </td>
                    <td>
                      &lt;ul&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ul&gt;
                    </td>

                    <td>
                      {" "}
                      <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      1. First item<br></br>
                      2. Second item<br></br>
                      3. Third item<br></br>
                      4. Fourth item<br></br>
                    </td>
                    <td>
                      &lt;ol&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ol&gt;
                    </td>

                    <td>
                      {" "}
                      <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      1. First item<br></br>
                      3. Second item<br></br>
                      8. Third item<br></br>
                      10. Fourth item<br></br>
                    </td>
                    <td>
                      &lt;ol&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ol&gt;
                    </td>

                    <td>
                      {" "}
                      <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      1. First item<br></br>
                      1. Second item<br></br>
                      1. Third item<br></br>
                      1. Fourth item<br></br>
                    </td>
                    <td>
                      &lt;ol&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ol&gt;
                    </td>

                    <td>
                      {" "}
                      <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                      </ol>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>
                      1. First item<br></br>
                      2. Second item<br></br>
                      3. Third item<br></br> &nbsp;&nbsp;&nbsp; 1. Indented item
                      <br></br>&nbsp;&nbsp;&nbsp; 2. Indented item<br></br>
                      4. Fourth item<br></br>
                    </td>
                    <td>
                      &lt;ol&gt;<br></br>
                      &lt;li&gt;First item&lt;/li&gt;<br></br>
                      &lt;li&gt;Second item&lt;/li&gt;<br></br>
                      &lt;li&gt;Third item&lt;/li&gt;<br></br>
                      &lt;ol&gt;<br></br>
                      &lt;li&gt;Indented item&lt;/li&gt;<br></br>
                      &lt;li&gt;Indented item&lt;/li&gt;<br></br>
                      &lt;/ol&gt;<br></br>
                      &lt;/li&gt;<br></br>
                      &lt;li&gt;Fourth item&lt;/li&gt;<br></br>
                      &lt;/ol&gt;
                    </td>

                    <td>
                      {" "}
                      <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <ol>
                          <li>Indented item</li>
                          <li>Indented item</li>
                        </ol>
                        <li>Fourth item</li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Use `code` in your Markdown file.</td>
                    <td>
                      Use&lt;code&gt;code&lt;/code&gt; in your Markdown file.
                    </td>
                    <td>
                      Use <code>code</code> in your Markdown file.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      click me [google](https://www.google.com/?gws_rd=ssl)
                    </td>
                    <td>click me &lt;a href&gt;google&lt;/a&gt;</td>
                    <td>
                      click me{" "}
                      <a href="https://www.google.com/?gws_rd=ssl">google</a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Markdown</th>
                    <th scope="col">HTML</th>
                    <th scope="col">Rendered Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      ![A
                      wallpaper!](https://th.bing.com/th/id/OIP.0PBj8Ohk3CTgavzLYVQpIQHaEK?pid=ImgDet&rs=1)
                    </td>
                    <td>
                      &lt;img
                      src="https://th.bing.com/th/id/OIP.0PBj8Ohk3CTgavzLYVQpIQHaEK?pid=ImgDet&rs=1"
                      alt="A wallpaper" &gt;
                    </td>
                    <td>
                      <img
                        src="https://www.google.com/?gws_rd=ssl"
                        alt="A wallpaper"
                      ></img>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
      <div
        class="container"
        style={{
          maxWidth: "100%",
          background: "linear-gradient(to right, #141e30, #243b55)",
          height: "200px",
          marginTop: "100px",
        }}
      >
        <div class="row">
          <div class="col-lg-4">
            <div
              className="icons"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: " column",
                paddingLeft: "20px",
                marginTop: "20px",
              }}
            >
              <Link href="https://github.com/">
                <GitHubIcon style={{ color: "white", fontSize: "40px" }} />
              </Link>
              <br></br>
              <Link href="https://www.facebook.com/">
                <FacebookIcon style={{ color: "white", fontSize: "40px" }} />
              </Link>
              <br></br>
              <Link href="https://in.linkedin.com/">
                <LinkedInIcon style={{ color: "white", fontSize: "40px" }} />
              </Link>
            </div>
          </div>
          <div class="col-lg-4">
            <div className="example" style={{ color: "white" }}>
              # ReactMarkdown viewer <br></br>
              <br></br>
              **(copy this and paste it in the input box above or you can also
              click `CLick Me for Help` button above)**
              <br></br>
              <br></br>
              ***this will help you to understand how reactmarkdown work***
            </div>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
      {/* <div className="bottom" style={{width:"100%", background:"linear-gradient(to right, #141e30, #243b55)", height:"200px",marginTop:"100px"}} >



</div> */}
    </>
  );
}

export default Markdown;
