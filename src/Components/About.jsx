import './About.css'


export default function About() {
  return <div className="AboutPage">
    <p><i>As a Full Stack developer and self-taught painter who loves blending code and canvas. With around 3+ years building responsive, user-friendly web experiences, I’m passionate about bringing ideas to life through clean, performant interfaces. I specialize in React, TypeScript, and modern UI/UX design, crafting websites that are as functional as they are beautiful.
      But that’s not all—I also create oil and acrylic paintings that explore nature,protraits etc. My artistic journey informs my approach to design: just as I layer brushstrokes on canvas, I layer pixels and interactions on the web.</i></p>
    <div className='paintingPage'>
      <img src="IMG_20250215_215745.jpg" width="300px" height="300px" alt='1' />
      <img src="IMG_20240209_224539_310.jpg" width="300px" height="300px" alt='2'  />
      <img src="IMG_20250116_111605.jpg" width="300px" height="300px" alt='3' />
      <img src="IMG_20250116_111706.jpg" width="300px" height="300px" alt='4'  />
      <img src="IMG_20240127_171243_253.jpg" width="300px" height="300px" alt='5'  />
    </div>
  </div>
}