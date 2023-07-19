import "./about.css";

const AboutUs=()=>{
    return(
        <section id="about-us">
             <div className="about">
            <h1 className="heading">What is this all about ?</h1> 
            <p className="head-des" class="text">We solve the problem of blood emergencies by connecting <span
                    className="one-line"></span> blood donors directly with people in blood need. </p>
            <div className="row">
                <div className="about-col">
                    <div className="image">
                        <img src="drop.png" alt="drop.png"/>
                    </div>
                    <h3>What we do ?</h3>
                    <p>We connect blood donors with recipients, without any intermediary such as blood banks, for an
                        efficient and seamless process.</p>
                </div>
                <div className="about-col">
                    <div className="image">
                        <img src="innovation.png" alt="innovation.png"/>
                    </div>
                    
                    <h3>Innovative</h3>
                    <p>Blood Buddy is an innovative approach to address global health.We provide <span>immediate
                            access</span> to blood donors. Innovate and Expand</p>
                </div>
                <div className="about-col">
                    <div className="image">
                        <img src="netwotk.png" alt="netwotk.png"/>
                    </div>
                    <h3>Network</h3>
                    <p>Blood Buddy is one of several community organizations working together as a network that
                        responds to emergencies in an well manner.</p>
                </div>
                <div className="about-col">
                    <div className="image">
                        <img src="noti.png" alt="noti.png"/>
                    </div>
                    <h3>Get notified</h3>
                    <p>Blood Buddy Connect works with network partners to connect blood donors and recipients
                        through an automated SMS service and a mobile app.</p>
                </div>
                <div className="about-col">
                    <div className="image">
                        <img src="cost.png" alt="cost.png"/>
                    </div>
                    <h3>Totally Free</h3>
                    <p>Blood Budyy's ultimate goal is to provide an easy -to-use, easy-to-access, fast, efficient,
                        and reliable way to get life-saving blood, totally <span>Free of cost.</span></p>
                </div>
                <div className="about-col">
                    <div className="image">
                        <img src="save.png" alt="save.png"/>
                    </div>
                    <h3>Save Life</h3>
                    <p>We are a non profit foundation and our main objective is to make sure that everything is done
                        to protect vulnerable persons.<span>Help
                            us by making a gift! Save Blood save lifes.</span></p>
                </div>
            </div>
        </div>
        </section>
       
    )
}

export default AboutUs