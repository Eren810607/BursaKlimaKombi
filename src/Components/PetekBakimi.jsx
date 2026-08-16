import React from 'react'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import '../css/petekbakimi.css'

const Slider = SliderImport.default || SliderImport;

function Petek() {
    return (
        <div>

            {/* HERO */}

            <div className='PetekBakimiImg'>

                <div className='PetekBakimiTexts'>

                    <h1 className='PetekBakimiH1'>
                        Petek Bakımı & Temizleme
                    </h1>

                    <hr className='PetekBakimiHr' />

                    <Button
                        onClick={() => window.location.href = "tel:05464895158"}
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
                        Petek Bakımı İçin Tıklayın
                    </Button>

                </div>

            </div>


            {/* ANA AÇIKLAMA */}

            <div className='PetekBakimiDiv'>

                <h1 className='PetekBakimiH1'>
                    Profesyonel Petek Bakımı ve Temizleme
                </h1>

                <hr className='PetekBakimiHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Bursa Klima Petek</b> olarak Bursa genelinde Petek bakım ve temizleme hizmetleri
                    sunuyoruz. Peteklerinizin daha verimli, güvenli ve uzun ömürlü çalışabilmesi için
                    düzenli bakım ve kontrollerin yapılması büyük önem taşımaktadır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Zaman içerisinde Peteklerin içerisinde toz, kir ve çeşitli partiküller birikebilir.
                    Bunun yanı sıra cihazın önemli parçalarında kullanım süresine bağlı olarak yıpranma
                    ve performans kaybı meydana gelebilir. Bu durum Peteknin daha fazla enerji tüketmesine,
                    yeterli ısıtma sağlayamamasına veya çeşitli arızaların ortaya çıkmasına neden olabilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerçekleştirdiğimiz <b>Petek bakım ve temizleme</b> işlemlerinde cihazın genel çalışma
                    durumu kontrol edilir. Brülör, eşanjör, fan, pompa, genleşme tankı ve diğer önemli
                    parçalar incelenerek Peteknin çalışma performansı değerlendirilir. Gerekli görülen
                    durumlarda temizlik ve bakım işlemleri gerçekleştirilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Düzenli Petek bakımı, cihazın daha verimli çalışmasına yardımcı olurken aynı zamanda
                    oluşabilecek bazı problemlerin erken fark edilmesine katkı sağlar. Petek bakımının
                    ihmal edilmesi zaman içerisinde performans kaybına, yüksek enerji tüketimine ve
                    daha ciddi arızalara yol açabilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Ev, ofis, iş yeri ve farklı yaşam alanlarında kullanılan Petekleriniz</b> için
                    bakım ve temizlik hizmeti sunuyoruz. Her Peteknin kullanım süresi, modeli ve mevcut
                    durumu farklı olduğundan bakım işlemlerinde cihazın ihtiyaçlarını dikkate alarak
                    hareket ediyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Petek bakımının yanı sıra cihazınızda meydana gelen <b>yeterli ısıtmama, sıcak su
                        problemleri, basınç düşmesi, su sızıntısı, sesli çalışma ve sık sık arızaya geçme</b>
                    gibi sorunlarda da gerekli kontrolleri gerçekleştiriyoruz. Sorunun kaynağını
                    belirleyerek uygun çözüm için sizlere yardımcı oluyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Bursa Klima Petek</b> olarak amacımız; Peteknizin daha verimli, güvenli ve
                    uzun ömürlü çalışmasına yardımcı olmak ve sizlere kaliteli teknik servis hizmeti
                    sunmaktır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Petek bakım ve temizleme hizmeti hakkında detaylı bilgi almak ve servis
                        talebinde bulunmak için bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>


            {/* BİLGİ KARTLARI */}

            <div className="PetekBakimiInfo">

                <div className="PetekBakimiInfoBox">
                    <span className="PetekInfoNumber">01</span>

                    <h2>Verimli Çalışma</h2>

                    <p>
                        Düzenli Petek bakımı, cihazınızın daha verimli çalışmasına
                        ve ısıtma performansını korumasına yardımcı olur.
                    </p>
                </div>


                <div className="PetekBakimiInfoBox">
                    <span className="PetekInfoNumber">02</span>

                    <h2>Enerji Tasarrufu</h2>

                    <p>
                        Bakımı düzenli yapılan Petekler çalışma sırasında daha
                        verimli olabilir ve gereksiz enerji tüketiminin azaltılmasına
                        yardımcı olabilir.
                    </p>
                </div>


                <div className="PetekBakimiInfoBox">
                    <span className="PetekInfoNumber">03</span>

                    <h2>Erken Kontrol</h2>

                    <p>
                        Bakım sırasında cihazın önemli parçaları kontrol edilerek
                        oluşabilecek problemlerin erken fark edilmesine yardımcı olunur.
                    </p>
                </div>

            </div>


            {/* NEDEN PETEK TEMİZLİĞİ */}

            <section className="PetekNeden">

                {/* SOL TARAF */}

                <div className="PetekNedenText">

                    <span className="PetekSectionNumber">
                        PETEK TEMİZLİĞİ
                    </span>

                    <h2>
                        Petekleriniz Neden Temizlenmeli?
                    </h2>

                    <hr />

                    <p>
                        Kalorifer sistemlerinde zaman içerisinde oluşan kir, tortu ve
                        çeşitli birikintiler peteklerin ısı performansını olumsuz
                        etkileyebilir. Düzenli temizlik, sistemin daha sağlıklı
                        çalışmasına yardımcı olur.
                    </p>

                </div>


                {/* SAĞ TARAF - ALT ALTA KARTLAR */}

                <div className="PetekNedenCards">

                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            01
                        </span>

                        <div>
                            <h3>Yetersiz Isınma</h3>

                            <p>
                                Peteklerin yeterince ısı vermemesi ve odaların
                                geç ısınması.
                            </p>
                        </div>

                    </div>


                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            02
                        </span>

                        <div>
                            <h3>Alt Kısmın Soğuk Kalması</h3>

                            <p>
                                Peteklerin üstü sıcak, alt kısmı soğuk kalıyorsa
                                sistemde birikinti oluşmuş olabilir.
                            </p>
                        </div>

                    </div>


                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            03
                        </span>

                        <div>
                            <h3>Dengesiz Isı Dağılımı</h3>

                            <p>
                                Bazı peteklerin diğerlerinden daha az ısınması
                                ısı dağılımında problem olduğunu gösterebilir.
                            </p>
                        </div>

                    </div>


                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            04
                        </span>

                        <div>
                            <h3>Yüksek Enerji Tüketimi</h3>

                            <p>
                                Verimsiz çalışan sistemin daha uzun süre çalışması
                                enerji tüketiminin artmasına neden olabilir.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* SLIDER */}

            <div className="PetekBakimiSlider">

                <Slider
                    dots={true}
                    infinite={true}
                    speed={600}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3500}
                    arrows={true}
                >

                    <div className="PetekSlide">
                        <span>01</span>

                        <h2>Petek İçi Temizliği</h2>

                        <p>
                            Peteklerin içerisinde zamanla biriken tortu, çamur ve
                            kirlerin temizlenmesiyle ısı dağılımının daha verimli
                            olması hedeflenir.
                        </p>
                    </div>


                    <div className="PetekSlide">
                        <span>02</span>

                        <h2>Tesisat Kontrolü</h2>

                        <p>
                            Kalorifer tesisatının genel durumu kontrol edilerek
                            su dolaşımını ve ısıtma performansını etkileyebilecek
                            problemler incelenir.
                        </p>
                    </div>


                    <div className="PetekSlide">
                        <span>03</span>

                        <h2>Tortu ve Çamur Temizliği</h2>

                        <p>
                            Tesisat içerisinde biriken tortu ve çamur kalıntıları
                            temizlenerek peteklerin daha sağlıklı çalışmasına
                            yardımcı olunur.
                        </p>
                    </div>


                    <div className="PetekSlide">
                        <span>04</span>

                        <h2>Isı Dağılımı Kontrolü</h2>

                        <p>
                            Peteklerin ısı dağılımı kontrol edilerek bazı bölgelerde
                            meydana gelebilecek düzensiz ısınma problemleri incelenir.
                        </p>
                    </div>


                    <div className="PetekSlide">
                        <span>05</span>

                        <h2>Hava Kontrolü</h2>

                        <p>
                            Peteklerde hava bulunup bulunmadığı kontrol edilerek
                            ısıtma performansını olumsuz etkileyebilecek durumlar
                            değerlendirilir.
                        </p>
                    </div>


                    <div className="PetekSlide">
                        <span>06</span>

                        <h2>Genel Petek Bakımı</h2>

                        <p>
                            Petek ve kalorifer sisteminin genel durumu kontrol
                            edilerek daha verimli bir ısıtma sistemi için gerekli
                            işlemler değerlendirilir.
                        </p>
                    </div>

                </Slider>

            </div>


            {/* ALT CTA */}

            <div className="PetekCTA">

                <h2>
                    Petekleriniz Yeterince Isınmıyor mu?
                </h2>

                <p>
                    Petek temizleme ve kalorifer tesisatı bakımı hakkında
                    bilgi almak için bizimle iletişime geçebilirsiniz.
                </p>

                <Button
                    variant="contained"
                    onClick={() => window.location.href = "tel:05464895158"}
                    sx={{
                        marginTop: '15px',
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#88b0c3"
                        }
                    }}
                >
                    Servis Talep Et
                </Button>

            </div>

        </div>
    )
}

export default Petek