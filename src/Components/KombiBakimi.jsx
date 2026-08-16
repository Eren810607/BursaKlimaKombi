import React from 'react'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../css/kombiBakimi.css'

const Slider = SliderImport.default || SliderImport;

function KombiBakimi() {
    return (
        <div>

            <div className='KombiBakimiImg'>

                <div className='KombiBakimiTexts'>

                    <h1 className='KombiBakimiH1'>
                        Kombi Bakımı
                    </h1>

                    <hr className='KombiBakimiHr' />

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
                        Kombi Bakımı İçin Tıklayın
                    </Button>

                </div>

            </div>


            <div className='KombiBakimiDiv'>

                <h1 className='KombiBakimiH1'>
                    Profesyonel Kombi Bakımı ve Temizleme
                </h1>

                <hr className='KombiBakimiHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Bursa Klima Kombi</b> olarak Bursa genelinde kombi bakım ve temizleme hizmetleri
                    sunuyoruz. Kombilerinizin daha verimli, güvenli ve uzun ömürlü çalışabilmesi için
                    düzenli bakım ve kontrollerin yapılması büyük önem taşımaktadır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Zaman içerisinde kombilerin içerisinde toz, kir ve çeşitli partiküller birikebilir.
                    Bunun yanı sıra cihazın önemli parçalarında kullanım süresine bağlı olarak yıpranma
                    ve performans kaybı meydana gelebilir. Bu durum kombinin daha fazla enerji tüketmesine,
                    yeterli ısıtma sağlayamamasına veya çeşitli arızaların ortaya çıkmasına neden olabilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerçekleştirdiğimiz <b>kombi bakım ve temizleme</b> işlemlerinde cihazın genel çalışma
                    durumu kontrol edilir. Brülör, eşanjör, fan, pompa, genleşme tankı ve diğer önemli
                    parçalar incelenerek kombinin çalışma performansı değerlendirilir. Gerekli görülen
                    durumlarda temizlik ve bakım işlemleri gerçekleştirilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Düzenli kombi bakımı, cihazın daha verimli çalışmasına yardımcı olurken aynı zamanda
                    oluşabilecek bazı problemlerin erken fark edilmesine katkı sağlar. Kombi bakımının
                    ihmal edilmesi zaman içerisinde performans kaybına, yüksek enerji tüketimine ve
                    daha ciddi arızalara yol açabilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Ev, ofis, iş yeri ve farklı yaşam alanlarında kullanılan kombileriniz</b> için
                    bakım ve temizlik hizmeti sunuyoruz. Her kombinin kullanım süresi, modeli ve mevcut
                    durumu farklı olduğundan bakım işlemlerinde cihazın ihtiyaçlarını dikkate alarak
                    hareket ediyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Kombi bakımının yanı sıra cihazınızda meydana gelen <b>yeterli ısıtmama, sıcak su
                        problemleri, basınç düşmesi, su sızıntısı, sesli çalışma ve sık sık arızaya geçme</b>
                    gibi sorunlarda da gerekli kontrolleri gerçekleştiriyoruz. Sorunun kaynağını
                    belirleyerek uygun çözüm için sizlere yardımcı oluyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Bursa Klima Kombi</b> olarak amacımız; kombinizin daha verimli, güvenli ve
                    uzun ömürlü çalışmasına yardımcı olmak ve sizlere kaliteli teknik servis hizmeti
                    sunmaktır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Kombi bakım ve temizleme hizmeti hakkında detaylı bilgi almak ve servis
                        talebinde bulunmak için bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>








            <div className="KombiBakimiSlider">

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

                    <div className="KombiSlide">
                        <span>01</span>
                        <h2>Brülör Temizliği</h2>
                        <p>
                            Kombinin yanma sisteminde bulunan brülör kontrol edilerek
                            gerekli temizlik işlemleri gerçekleştirilir.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>02</span>
                        <h2>Eşanjör Kontrolü</h2>
                        <p>
                            Eşanjörün genel durumu kontrol edilerek cihazın ısıtma
                            performansının verimli şekilde çalışmasına yardımcı olunur.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>03</span>
                        <h2>Fan ve Pompa Kontrolü</h2>
                        <p>
                            Kombinin fan ve pompa gibi önemli parçaları kontrol edilerek
                            cihazın çalışma durumu değerlendirilir.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>04</span>
                        <h2>Su Basıncı Kontrolü</h2>
                        <p>
                            Kombinin su basıncı kontrol edilerek cihazın uygun çalışma
                            seviyesinde olup olmadığı incelenir.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>05</span>
                        <h2>Sıcak Su Kontrolü</h2>
                        <p>
                            Sıcak su sistemi kontrol edilerek kullanım sırasında
                            oluşabilecek problemlerin kaynağı incelenir.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>06</span>
                        <h2>Genel Kombi Bakımı</h2>
                        <p>
                            Kombinin önemli parçaları genel olarak kontrol edilerek
                            cihazın daha güvenli ve verimli çalışmasına yardımcı olunur.
                        </p>
                    </div>

                </Slider>

            </div>





























            <div className="KombiBakimiInfo">

                <div className="KombiBakimiInfoBox">
                    <h2>Verimli Çalışma</h2>
                    <p>
                        Düzenli kombi bakımı, cihazınızın daha verimli çalışmasına
                        ve ısıtma performansını korumasına yardımcı olur.
                    </p>
                </div>

                <div className="KombiBakimiInfoBox">
                    <h2>Enerji Tasarrufu</h2>
                    <p>
                        Bakımı düzenli yapılan kombiler çalışma sırasında daha
                        verimli olabilir ve gereksiz enerji tüketiminin azaltılmasına
                        yardımcı olabilir.
                    </p>
                </div>

                <div className="KombiBakimiInfoBox">
                    <h2>Erken Kontrol</h2>
                    <p>
                        Bakım sırasında cihazın önemli parçaları kontrol edilerek
                        oluşabilecek problemlerin erken fark edilmesine yardımcı olunur.
                    </p>
                </div>

            </div>













        </div>
    )
}

export default KombiBakimi