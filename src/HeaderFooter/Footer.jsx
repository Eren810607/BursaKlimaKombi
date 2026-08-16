import React from 'react';
import '../css/footer.css';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import logo from "../images/klimalogo.png";

import { Link } from "react-router-dom";


function Footer() {

    return (
        <footer className="Footer">

            {/* SOL - LOGO VE TANITIM */}
            <div className="FooterPromotion">

                <div className="FooterBrand">

                    <img
                        className="FooterLogo"
                        src={logo}
                        alt="Bursa Klima Kombi Logo"
                    />

                    <h2 className="FooterPromTitle">
                        Bursa Klima Kombi
                    </h2>

                </div>

                <hr className="FooterPromHr" />

                <p className="PromotionText">
                    Bursa Klima Kombi; klima, kombi ve beyaz eşya bakım,
                    onarım ve servis hizmetlerinde güvenilir ve kaliteli
                    çözümler sunar. Bursa genelinde hızlı ve profesyonel
                    teknik servis hizmeti sağlıyoruz.
                </p>

            </div>


            {/* ORTA - HIZLI BAĞLANTILAR */}
            <div className="FooterLinksDiv">

                <h2 className="FooterPromTitle">
                    Hızlı Bağlantılar
                </h2>

                <hr className="FooterLinksHr" />

                <ul className="FooterList">

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/">
                            Anasayfa
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/hakkimizda">
                            Hakkımızda
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/petek-bakimi">
                            Petek Bakımı
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/beyaz-esya-tamiri">
                            Beyaz Eşya Tamiri
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/ariza-onarim">
                            Arıza Onarım
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/iletisim">
                            İletişim
                        </Link>
                    </li>

                </ul>

            </div>


            {/* SAĞ - HİZMETLER */}
            <div className="FooterContact">

                <h2 className="FooterPromTitle">
                    Hizmetlerimiz
                </h2>

                <hr className="FooterLinksHr" />

                <ul className="FooterList">

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/klima-bakimi">
                            Klima Bakımı
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/kombi-bakimi">
                            Kombi Bakımı
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/petek-bakimi">
                            Petek Temizleme
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/beyaz-esya-tamiri">
                            Beyaz Eşya Servisi
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/ariza-onarim">
                            Arıza Onarım
                        </Link>
                    </li>

                </ul>

            </div>


            {/* ALT */}
            <div className="FooterEndHr">

                <hr />

                <p>
                    © 2026 Bursa Klima Kombi | Design By Eren Kaya
                </p>

            </div>

        </footer>
    );
}


export default Footer;