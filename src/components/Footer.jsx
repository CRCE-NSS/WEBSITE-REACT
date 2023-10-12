// src/components/Footer.jsx
import React from 'react';
<link rel="stylesheet" href="../../public/style.css" />

function Footer() {
    return (
        <section class="footer">
            <div class="box-container">
                <div class="box">
                    <div class="inline">
                        <img class="nss-logo" alt="NSS Logo" src="/images/nss-logo.svg" />
                        <h3 class="nss-logo-h3">National Service Scheme</h3>
                    </div>

                    <div class="inline">
                        <img class="father-logo" alt="Father Logo" src="/images/father-logo.svg" />
                        <img class="crce-logo" alt="CRCE Logo" src="/images/crce-logo.svg" />
                        <h3 class="crce-logo-h3">
                            Fr. Conceicao Rodrigues College of Engineering
                        </h3>
                    </div>

                    <p>Feel free to follow us on our social media handles</p>

                    <div class="share">
                        <a
                            href="https://www.facebook.com/NssCrce/"
                            class="fa-brands fa-facebook"
                            title="facebook"
                        ></a>
                        <a
                            href="https://twitter.com/nssCRCE"
                            class="fa-brands fa-twitter"
                            title="twitter"
                        ></a>
                        <a
                            href="https://www.instagram.com/nss.crce/"
                            class="fa-brands fa-instagram"
                            title="instagram"
                        ></a>
                        <a
                            href="https://www.linkedin.com/in/nss-crce-0a44951b0/"
                            class="fa-brands fa-linkedin"
                            title="linkedin"
                        ></a>
                        <a
                            href="https://www.youtube.com/@nsscrce502/videos"
                            class="fa-brands fa-youtube"
                            title="youtube"
                        ></a>
                    </div>
                </div>

                <div class="box" id="contact">
                    <h3>Contact Info</h3>
                    <a href="#" class="links">
                        <i class="fa fa-phone"></i>+91 99204 14062 Ratan Singh(President)</a
                    >
                    <a href="#" class="links">
                        <i class="fa fa-phone"></i>+91 93266 65726 Krishna Soni(Vice
                        President)</a
                    >
                    <a href="#" class="links">
                        <i class="fa fa-phone"></i>+91 9969354409 Aarush Wasnik(Senior
                        Web-Master)</a
                    >
                    <a href="mailto:crce.nss@gmail.com" class="links lower">
                        <i class="fa-solid fa-envelope"></i>crce.nss@gmail.com</a
                    >
                    <a
                        href="https://www.google.com/maps/place/Fr.+Conceicao+Rodrigues+College+of+Engineering/@19.044333,72.8203705,15z/data=!4m5!3m4!1s0x0:0x111b63353dbbce01!8m2!3d19.044333!4d72.8203705"
                        class="links"
                    >
                        <i class="fa fa-map-marker"></i>Fr. Conceicao Rodrigues College of
                        Enginnering, Father Agnel Ashram, Bandstand Promenade, Mount Mary,
                        Bandra West, Mumbai, Maharashtra.
                    </a>
                </div>
            </div>

            <div class="footer-end">
                <div class="copyright-and-designers">
                    <h4 className='copyright'>Copyright © 2023 NSS-CRCE. DESIGN & DEVELOPMENT BY <a className='designers' href='#'>NSS-CRCE WEB TEAM</a></h4>
                    <p id="last-updated">Last Updated: 7 Oct 2023</p>
                </div>

            </div>

        </section>
    );
}

export default Footer;
