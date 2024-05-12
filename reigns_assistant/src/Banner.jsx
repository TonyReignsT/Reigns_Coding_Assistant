import style from './styles/banner.module.css'; // Importing CSS module
// import image from './images/ai1,jpg';

function Banner() {
  return (
    <>
      <div className={style.banner}> {/* Using CSS module class */}
        {/* <img src={image} alt="Banner Image" /> Using image variable directly */}
        <h1>REIGNS CODING ASSISTANT</h1>
        <p>
          Welcome to Reigns Coding Assistant. This page contains what you will
          require in web/software development <br />and also references to libraries
          and frameworks.
        </p>
        <div className={style.btns}> {/* Using CSS module class */}
          <ul>
            <li><a href="">Cheet Sheets</a></li>
            <li><a href="">AI Prompts</a></li>
            <li><a href="">Code Sheets</a></li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
}

export default Banner;
