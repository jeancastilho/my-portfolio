const Skills = () => {
    return(
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                
                <div className="skill-card java">
                    <i className="fa-brands fa-java java-icon"></i>
                    <p>Java</p>
                </div>  

                <div className="skill-card java">
                    <i className="fa-brands fa-angular angular-icon"></i>
                    <p>Angular</p>
                </div>  

                <div className="skill-card git">
                    <i className="fa-brands fa-git-alt git-icon"></i>
                    <p>Git</p>
                </div>
            </div>
        </div>
    )
}
export default Skills;