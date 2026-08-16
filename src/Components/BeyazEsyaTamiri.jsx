import React from 'react'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import '../css/beyazesyatamiri.css'

const Slider = SliderImport.default || SliderImport;

function BeyazEsyaTamiri() {
    return (
        <div>

            {/* HERO */}

            <div className='BeyazEsyaImg'>

                <div className='BeyazEsyaTexts'>

                    <h1 className='BeyazEsyaH1'>
                        Beyaz Eşya Tamiri
                    </h1>

                    <hr className='BeyazEsyaHr' />

                    <Button
                        variant="contained"
                        onClick={() => window.location.href = "tel:05464895158"}
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
                        Servis İçin Tıklayın
                    </Button>

                </div>

            </div>


            {/* ANA AÇIKLAMA */}

            <div className='BeyazEsyaDiv'>

                <h1 className='BeyazEsyaTitle'>
                    Profesyonel Beyaz Eşya Tamiri ve Servisi
                </h1>

                <hr className='BeyazEsyaHr' />

                <p>

                    <b>Bursa Klima Kombi</b> olarak Bursa genelinde buzdolabı, çamaşır
                    makinesi, bulaşık makinesi ve diğer beyaz eşyalarınız için teknik
                    servis ve tamir hizmetleri sunuyoruz. Cihazlarınızda meydana gelen
                    arızaların doğru şekilde tespit edilmesi ve uygun çözümler
                    uygulanması için çalışıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Beyaz eşyalarınız zaman içerisinde kullanım yoğunluğuna ve cihazın
                    yaşına bağlı olarak çeşitli arızalar gösterebilir. Cihazın hiç
                    çalışmaması, yeterince soğutmaması, su almaması, su boşaltmaması,
                    sesli çalışması veya programı tamamlamaması gibi sorunlarla
                    karşılaşabilirsiniz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerçekleştirdiğimiz <b>beyaz eşya arıza tespiti ve tamiri</b>
                    işlemlerinde öncelikle cihazın genel çalışma durumu kontrol edilir.
                    Arızanın kaynağı belirlenerek gerekli onarım işlemleri
                    değerlendirilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerekli görülen durumlarda cihazın ilgili parçaları kontrol edilir,
                    arızalı parçaların değişimi gerçekleştirilir ve cihazın tekrar
                    kullanılabilir hale getirilmesi için gerekli işlemler yapılır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Ev, ofis ve farklı yaşam alanlarında kullanılan beyaz eşyalarınız</b>
                    için servis hizmeti sunuyoruz. Her cihazın modeli, kullanım süresi
                    ve arızası farklı olduğundan kontrolleri cihazın mevcut durumuna
                    göre gerçekleştiriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Amacımız; beyaz eşyalarınızda meydana gelen problemlerin doğru şekilde
                    tespit edilmesine, gerekli bakım ve onarım işlemlerinin
                    gerçekleştirilmesine ve cihazlarınızın daha verimli çalışmasına
                    yardımcı olmaktır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Beyaz eşya tamiri ve servis hizmeti hakkında bilgi almak veya
                        servis talebinde bulunmak için bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>


            {/* BİLGİ KARTLARI */}

            <div className="BeyazEsyaInfo">

                <div className="BeyazEsyaInfoBox">

                    <span className="BeyazInfoNumber">
                        01
                    </span>

                    <h2>
                        Arıza Tespiti
                    </h2>

                    <p>
                        Cihazınızda meydana gelen problemin kaynağını belirlemek
                        için gerekli kontroller gerçekleştirilir.
                    </p>

                </div>


                <div className="BeyazEsyaInfoBox">

                    <span className="BeyazInfoNumber">
                        02
                    </span>

                    <h2>
                        Profesyonel Onarım
                    </h2>

                    <p>
                        Tespit edilen arızaya uygun bakım ve onarım işlemleri
                        gerçekleştirilerek cihazınızın tekrar kullanılabilir
                        hale gelmesine yardımcı olunur.
                    </p>

                </div>


                <div className="BeyazEsyaInfoBox">

                    <span className="BeyazInfoNumber">
                        03
                    </span>

                    <h2>
                        Parça Değişimi
                    </h2>

                    <p>
                        Arızalı veya kullanım ömrünü tamamlamış parçaların
                        gerekli durumlarda değişimi gerçekleştirilir.
                    </p>

                </div>

            </div>


            {/* NEDEN BEYAZ EŞYA SERVİSİ */}

            <section className="BeyazEsyaNeden">

                <div className="BeyazEsyaNedenText">

                    <span className="BeyazSectionNumber">
                        BEYAZ EŞYA SERVİSİ
                    </span>

                    <h2>
                        Beyaz Eşyalarınız Neden Arızalanır?
                    </h2>

                    <hr />

                    <p>
                        Beyaz eşyalar yoğun kullanılan cihazlar olduğu için zaman
                        içerisinde çeşitli teknik problemler ortaya çıkabilir.
                        Düzenli kontrol ve doğru müdahale cihazın kullanım ömrünün
                        korunmasına yardımcı olabilir.
                    </p>

                </div>


                <div className="BeyazEsyaNedenCards">

                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            01
                        </span>

                        <div>
                            <h3>
                                Cihazın Çalışmaması
                            </h3>

                            <p>
                                Cihazın hiç çalışmaması elektrik, elektronik veya
                                ilgili parçalardan kaynaklanan bir arızaya işaret
                                edebilir.
                            </p>
                        </div>

                    </div>


                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            02
                        </span>

                        <div>
                            <h3>
                                Su Problemleri
                            </h3>

                            <p>
                                Cihazın su almaması, su boşaltmaması veya su
                                sızdırması çeşitli parçalardaki problemlerin
                                göstergesi olabilir.
                            </p>
                        </div>

                    </div>


                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            03
                        </span>

                        <div>
                            <h3>
                                Sesli Çalışma
                            </h3>

                            <p>
                                Normalden fazla ses çıkaran cihazlarda mekanik
                                parçaların ve çalışma sisteminin kontrol edilmesi
                                gerekebilir.
                            </p>
                        </div>

                    </div>


                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            04
                        </span>

                        <div>
                            <h3>
                                Performans Kaybı
                            </h3>

                            <p>
                                Cihazın yeterince soğutmaması, temizlememesi veya
                                programları düzgün tamamlamaması performans
                                problemlerine işaret edebilir.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* SLIDER */}

            <div className="BeyazEsyaSlider">

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

                    <div className="BeyazEsyaSlide">

                        <span>01</span>

                        <h2>
                            Buzdolabı Servisi
                        </h2>

                        <p>
                            Buzdolabınızda meydana gelen soğutmama, aşırı buzlanma,
                            sesli çalışma ve benzeri problemlerin kontrolünü
                            gerçekleştiriyoruz.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>02</span>

                        <h2>
                            Çamaşır Makinesi Servisi
                        </h2>

                        <p>
                            Çamaşır makinesinin su almaması, su boşaltmaması,
                            sıkma yapmaması veya sesli çalışması gibi sorunlarda
                            gerekli kontrolleri gerçekleştiriyoruz.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>03</span>

                        <h2>
                            Bulaşık Makinesi Servisi
                        </h2>

                        <p>
                            Bulaşık makinesinin su almaması, yeterince temiz
                            yıkamaması veya programı tamamlamaması gibi sorunları
                            kontrol ediyoruz.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>04</span>

                        <h2>
                            Arıza Tespiti
                        </h2>

                        <p>
                            Cihazda meydana gelen problemin kaynağı belirlenerek
                            gerekli onarım ve parça değişimi işlemleri
                            değerlendirilir.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>05</span>

                        <h2>
                            Parça Değişimi
                        </h2>

                        <p>
                            Arızalı parçaların kontrolü yapılarak gerekli
                            durumlarda uygun parça değişimi gerçekleştirilir.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>06</span>

                        <h2>
                            Genel Beyaz Eşya Bakımı
                        </h2>

                        <p>
                            Cihazın genel çalışma durumu kontrol edilerek
                            karşılaşılan problemlere uygun çözüm değerlendirilir.
                        </p>

                    </div>

                </Slider>

            </div>


            {/* CTA */}

            <div className="BeyazEsyaCTA">

                <h2>
                    Beyaz Eşyanız Arızalandı mı?
                </h2>

                <p>
                    Buzdolabı, çamaşır makinesi, bulaşık makinesi ve diğer
                    beyaz eşyalarınız için servis ve tamir hizmeti hakkında
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

export default BeyazEsyaTamiri