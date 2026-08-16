import React from 'react'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Button from '@mui/material/Button';

import "../css/about.css";


function About() {

    return (
        <div>

            <div className='AboutImg'>

                <div className='AboutImgTexts'>

                    <h1 className='AboutH1'>
                        Hakkımızda
                    </h1>

                    <hr className='AboutHr' />

                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '13px',
                            backgroundColor: "black",
                            fontFamily: 'arial',
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#88b0c3"
                            }
                        }}
                    >
                        İletişime Geçmek İçin Tıklayın
                    </Button>

                </div>

            </div>


            <div className='AboutDiv'>

                <h1 className='AboutH1'>
                    Bursa Klima Kombi Firması Kimdir?
                </h1>

                <hr className='AboutHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Bursa Klima Kombi</b>, Bursa genelinde klima, kombi ve beyaz eşya teknik servis alanında hizmet sunan bir işletmedir. Müşterilerimizin ihtiyaçlarına hızlı, güvenilir ve çözüm odaklı şekilde cevap vermeyi amaçlıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Klima ve kombilerinizin daha verimli ve uzun ömürlü çalışabilmesi için <b>klima bakımı ve kombi bakımı</b> hizmetleri sunuyoruz. Bunun yanı sıra kalorifer sistemlerinin verimli çalışmasına yardımcı olmak amacıyla <b>petek temizleme</b> işlemleri gerçekleştiriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Beyaz eşyalarınızda meydana gelen arızalarda ise <b>arıza tespiti, onarım ve parça değişimi</b> hizmetleri sağlıyoruz. Sorunun kaynağını doğru şekilde belirleyerek gerekli müdahaleyi yapıyor ve cihazınızın tekrar kullanılabilir hale gelmesi için çalışıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <br />
                    <span className="desktopBreak2"><br /></span>

                    Hizmet anlayışımızın temelinde <b>kaliteli işçilik, güvenilir hizmet ve müşteri memnuniyeti</b> bulunmaktadır. Her arızanın ve her cihazın farklı olabileceğinin bilinciyle, ihtiyaca uygun çözümler üretmeye özen gösteriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Bursa Klima Kombi</b> olarak; klima bakımı, kombi bakımı, petek temizleme, beyaz eşya tamiri, arıza onarımı ve parça değişimi ihtiyaçlarınızda Bursa genelinde sizlere hizmet vermekten memnuniyet duyuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Sorunlarınıza hızlı ve güvenilir çözümler için bizimle iletişime geçebilirsiniz.</b>

                </p>

            </div>


            <div className="AboutInfo">

                <div className="AboutInfoBox">
                    <h2>Güvenilir Hizmet</h2>

                    <p>
                        Müşterilerimizin ihtiyaçlarını doğru şekilde anlayarak
                        güvenilir ve çözüm odaklı teknik servis hizmeti sunmayı
                        amaçlıyoruz.
                    </p>
                </div>


                <div className="AboutInfoBox">
                    <h2>Kaliteli İşçilik</h2>

                    <p>
                        Klima, kombi ve beyaz eşya cihazlarında doğru tespit ve
                        kaliteli işçilik ile kalıcı çözümler üretmeye önem veriyoruz.
                    </p>
                </div>


                <div className="AboutInfoBox">
                    <h2>Müşteri Memnuniyeti</h2>

                    <p>
                        Hizmetimizin her aşamasında müşteri memnuniyetini ön planda
                        tutarak ihtiyaçlarınıza uygun çözümler sunuyoruz.
                    </p>
                </div>

            </div>


            <div className="AboutServices">

                <h1 className="AboutH1">
                    Hizmet Alanlarımız
                </h1>



                <div className="AboutServicesCards">

                    <div className="AboutServiceCard">

                        <h2>Klima Bakımı</h2>

                        <p>
                            Klima bakım, temizlik ve performans kontrolleri ile
                            cihazlarınızın daha verimli çalışmasına yardımcı oluyoruz.
                        </p>

                    </div>


                    <div className="AboutServiceCard">

                        <h2>Kombi Bakımı</h2>

                        <p>
                            Kombilerinizin düzenli bakım ve kontrollerini
                            gerçekleştirerek daha verimli çalışmasına yardımcı oluyoruz.
                        </p>

                    </div>


                    <div className="AboutServiceCard">

                        <h2>Petek Temizleme</h2>

                        <p>
                            Kalorifer sistemlerinin daha verimli çalışmasına yardımcı
                            olmak amacıyla petek temizleme hizmeti sunuyoruz.
                        </p>

                    </div>


                    <div className="AboutServiceCard">

                        <h2>Beyaz Eşya Servisi</h2>

                        <p>
                            Beyaz eşyalarınızda meydana gelen arızaların tespiti,
                            onarımı ve gerekli parça değişimleri için hizmet veriyoruz.
                        </p>

                    </div>

                </div>

            </div>


            <div className="AboutCTA">

                <h2>
                    Teknik Servis İhtiyacınız mı Var?
                </h2>

                <p>
                    Klima, kombi, petek ve beyaz eşya hizmetleri hakkında
                    detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
                </p>

                <Button
                    variant="contained"
                    sx={{
                        marginTop: '15px',
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#88b0c3"
                        }
                    }}
                >
                    İletişime Geç
                </Button>

            </div>

        </div>
    )
}

export default About