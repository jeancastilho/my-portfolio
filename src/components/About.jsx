import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>Sobre mim</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    Como desenvolvedor de software, sou apaixonado por criar soluções elegantes e eficazes para desafios complexos. Minha expertise está em construir e manter aplicações web com tecnologias como Java, Spring/Spring Boot, Hibernate, JPA, iReport, MySQL, ZK Framework, PrimeNG e Angular. 
                    Destaco-me na gestão de bancos de dados relacionais como PostgreSQL e MySQL, garantindo integridade dos dados e eficiência operacional.
                    Minhas habilidades incluem mapeamento objeto-relacional com JPA Hibernate, facilitando a interação entre aplicações Java e bancos de dados, além de criar relatórios detalhados com iReport.
                    Proficiente em controle de versão com Git e CI/CD com Jenkins, automatizo processos de build, teste e deployment para melhorar a eficiência e reduzir erros.
                    </p>
                    <p>
                    Com uma sólida base nessas tecnologias, estou sempre ansioso para expandir meu conhecimento e enfrentar novos desafios. 
                    Minha paixão por aprendizado contínuo me impulsiona a acompanhar as tecnologias emergentes e contribuir para projetos inovadores, garantindo soluções de alta qualidade com foco em desempenho e experiência do usuário.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>

                </div>
            </div>
        </div>
    )
}
export default About;   