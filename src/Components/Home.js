import './Home.css';

function Home() {
 

  return <>
  <section className='intro'>
    <div className='introText'>
      <h1 className='welcomeHeader'>Hello, I'm Shrutika Sarvade.<br/>A Software Engineer <br/>based in Pune,India. </h1>
      <p className='subtext'>Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for 
        JavaScript, React and all things web development. 
        The unique combination of creativity, logic, technology and never
         running out of new things to discover, drives my excitement and passion for web development.
          When I’m not at my computer I like to spend my time painting, keeping fit and going for a swim.</p>
    </div>
    <div className='Logo'>
      <div className='skill-item'><img src='/javascriptLogo.png' width="100" height="100"/></div>
      <div className='skill-item'><img src='/htmlLogo.png' width="100" height="100" /></div>
      <div className='skill-item'><img src='/cssLogo.png' width="100" height="100" /></div>
      <div className='skill-item'><img src='/logo192.png' width="100" height="100" /></div>
      <div className='skill-item'><img src='/sqlIogo.png' width="100" height="100" /></div>
      <div className='skill-item'><img src='/typescript-logo-blue-square-modern-design-icon.png' width="100" height="100" /></div>
      <div className='skill-item'><img src='/java.png' width="100" height="100" /></div>
    </div>
  </section>
  </>
}

export default Home;
