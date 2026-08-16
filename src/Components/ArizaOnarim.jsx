import React from 'react';
import Button from '@mui/material/Button';
import '../css/arizaonarim.css';

function ArizaOnarim() {
    return (
        <div>

            {/* HERO */}

            <div className="ArizaHero">

                <div className="ArizaHeroOverlay">



                    <h1>
                        Arıza Onarım ve Parça Değişimi
                    </h1>

                    <hr />

                    <p>
                        Klima, kombi ve beyaz eşyalarınızda oluşan arızalar için
                        profesyonel tespit, onarım ve parça değişimi hizmeti.
                    </p>

                    <Button
                        variant="contained"
                        onClick={() => window.location.href = "tel:05464895158"}
                        sx={{
                            marginTop: '18px',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '11px 24px',
                            '&:hover': {
                                backgroundColor: '#88b0c3'
                            }
                        }}
                    >
                        Servis Talep Et
                    </Button>

                </div>

            </div>


            {/* ANA AÇIKLAMA */}

            <section className="ArizaIntro">

                <div className="ArizaIntroTitle">

                    <span>ARIZA & ONARIM</span>

                    <h2>
                        Cihazlarınızdaki Sorunlara<br />
                        Çözüm Sunuyoruz
                    </h2>

                    <hr />

                </div>

                <div className="ArizaIntroText">

                    <p>
                        <b>Bursa Klima Kombi</b> olarak klima, kombi ve beyaz
                        eşyalarınızda meydana gelen arızaların tespiti,
                        onarımı ve gerekli durumlarda parça değişimi için
                        teknik servis hizmeti sunuyoruz.
                    </p>

                    <p>
                        Cihazlarda meydana gelen her arızanın farklı bir
                        nedeni olabileceğinden öncelikle sorunun kaynağını
                        belirlemeye önem veriyoruz. Yapılan kontroller
                        sonucunda gerekli onarım işlemleri gerçekleştirilir.
                    </p>

                    <p>
                        Değişmesi gereken parçaların tespit edilmesi
                        durumunda uygun parça değişimi yapılarak cihazın
                        tekrar güvenli ve verimli şekilde çalışmasına
                        yardımcı oluyoruz.
                    </p>

                </div>

            </section>


            {/* HİZMET KARTLARI */}

            <section className="ArizaServices">

                <div className="ArizaSectionTitle">

                    <span>HİZMETLERİMİZ</span>

                    <h2>
                        Hangi Konularda<br />
                        Hizmet Veriyoruz?
                    </h2>

                    <hr />

                </div>


                <div className="ArizaServiceGrid">

                    <div className="ArizaServiceCard">
                        <span>01</span>
                        <h3>Arıza Tespiti</h3>
                        <p>
                            Cihazınızda meydana gelen problemin kaynağını
                            belirlemek için gerekli kontrolleri
                            gerçekleştiriyoruz.
                        </p>
                    </div>


                    <div className="ArizaServiceCard">
                        <span>02</span>
                        <h3>Teknik Onarım</h3>
                        <p>
                            Tespit edilen arızaya uygun teknik müdahaleleri
                            gerçekleştirerek cihazın tekrar çalışmasına
                            yardımcı oluyoruz.
                        </p>
                    </div>


                    <div className="ArizaServiceCard">
                        <span>03</span>
                        <h3>Parça Değişimi</h3>
                        <p>
                            Arızalı veya kullanım ömrünü tamamlamış parçaların
                            gerekli durumlarda değiştirilmesini sağlıyoruz.
                        </p>
                    </div>


                    <div className="ArizaServiceCard">
                        <span>04</span>
                        <h3>Çalışma Kontrolü</h3>
                        <p>
                            Onarım sonrasında cihazın çalışma durumu kontrol
                            edilerek gerekli kontroller tamamlanır.
                        </p>
                    </div>

                </div>

            </section>


            {/* ARIZA BELİRTİLERİ */}

            <section className="ArizaProblems">

                <div className="ArizaProblemsImage">
                    <div>
                        <span>ARIZA BELİRTİLERİ</span>
                        <h2>
                            Cihazınızda Bu Sorunlardan<br />
                            Biri mi Var?
                        </h2>
                    </div>
                </div>


                <div className="ArizaProblemsList">

                    <div>
                        <strong>01</strong>
                        <p>
                            Cihazın hiç çalışmaması veya çalışırken kapanması
                        </p>
                    </div>

                    <div>
                        <strong>02</strong>
                        <p>
                            Cihazın yeterli performans göstermemesi
                        </p>
                    </div>

                    <div>
                        <strong>03</strong>
                        <p>
                            Anormal ses, koku veya titreşim oluşması
                        </p>
                    </div>

                    <div>
                        <strong>04</strong>
                        <p>
                            Su sızıntısı, ısıtmama veya soğutmama problemleri
                        </p>
                    </div>

                    <div>
                        <strong>05</strong>
                        <p>
                            Sık sık arızaya geçme veya hata kodu vermesi
                        </p>
                    </div>

                </div>

            </section>


            {/* NASIL ÇALIŞIYORUZ */}

            <section className="ArizaProcess">

                <div className="ArizaSectionTitle">

                    <span>SERVİS SÜRECİ</span>

                    <h2>
                        Nasıl Çalışıyoruz?
                    </h2>

                    <hr />

                </div>


                <div className="ArizaProcessSteps">

                    <div className="ArizaStep">
                        <span>01</span>
                        <h3>Arıza Bildirimi</h3>
                        <p>
                            Cihazınızdaki problemi bize iletiyorsunuz.
                        </p>
                    </div>

                    <div className="ArizaStep">
                        <span>02</span>
                        <h3>Kontrol</h3>
                        <p>
                            Cihazın mevcut durumu ve arıza kaynağı inceleniyor.
                        </p>
                    </div>

                    <div className="ArizaStep">
                        <span>03</span>
                        <h3>Onarım</h3>
                        <p>
                            Gerekli teknik müdahale ve parça değişimi yapılıyor.
                        </p>
                    </div>

                    <div className="ArizaStep">
                        <span>04</span>
                        <h3>Son Kontrol</h3>
                        <p>
                            Cihazın çalışma durumu kontrol edilerek işlem tamamlanıyor.
                        </p>
                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="ArizaCTA">

                <div>

                    <span>TEKNİK SERVİS DESTEĞİ</span>

                    <h2>
                        Cihazınız Arızalandı mı?
                    </h2>

                    <p>
                        Arıza tespiti, onarım ve parça değişimi hakkında
                        bilgi almak için bizimle iletişime geçebilirsiniz.
                    </p>

                    <Button
                        variant="contained"
                        onClick={() => window.location.href = "tel:05464895158"}
                        sx={{
                            marginTop: '18px',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '11px 26px',
                            '&:hover': {
                                backgroundColor: '#88b0c3'
                            }
                        }}
                    >
                        İletişime Geç
                    </Button>

                </div>

            </section>

        </div>
    );
}

export default ArizaOnarim;