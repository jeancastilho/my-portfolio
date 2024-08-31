import Image from "next/image";

const Hero = () => {
    return(
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Jean's personal headshot" />
            <div className="hero-text">
                <h1>Olá, Eu sou o Jean👋 </h1>
                <p>
                Sou desenvolvedor de software, com experiência em aplicações web com Java. Estou sempre pronto para aprender e enfrentar novos desafios.
                </p>
                <a
            href="https://github.com/jeancastilho"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jeanderson-c-a8b80b107/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          
        </div>
      </div>
  )
}

export default Hero;
