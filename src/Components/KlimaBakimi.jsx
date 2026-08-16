import React from 'react'
import '../css/klimaBakimi.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function KlimaBakimi() {
    return (
        <div>

            <div className='klimaBakimiImg'>

                <div className='KlimaBakimiTexts'>

                    <h1 className='KlimaBakimiH1'>
                        Klima Bakımı & Temizleme
                    </h1>

                    <hr className='KlimaBakimiHr' />

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
                        Klima Bakımı & Tamiri İçin Tıklayın
                    </Button>

                </div>

            </div>


            <div className='KlimaBakimiDiv'>

                <h1 className='KlimaBakimiH1'>
                    Profesyonel Klima Bakımı ve Temizleme
                </h1>

                <hr className='KlimaBakimiHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Bursa Klima Kombi</b> olarak Bursa genelinde klima bakım ve temizleme hizmetleri sunuyoruz.
                    Klimalarınızın daha verimli, sağlıklı ve uzun ömürlü çalışabilmesi için düzenli bakım ve temizlik
                    işlemlerinin yapılması büyük önem taşımaktadır.

                    <br />
                    <span className="desktopBreak"><br /></span>


                    Zaman içerisinde klimaların filtrelerinde, iç ünitesinde ve diğer bölümlerinde toz, kir ve çeşitli
                    partiküller birikebilir. Bu durum klimanın hava akışını ve performansını olumsuz etkileyebilir.
                    Aynı zamanda cihazın daha fazla enerji tüketmesine ve yeterli soğutma performansı gösterememesine
                    neden olabilir.

                    <br />
                    <span className="desktopBreak"><br /></span>


                    Gerçekleştirdiğimiz <b>klima bakım ve temizleme</b> işlemlerinde cihazın genel çalışma durumu
                    kontrol edilir. Klima filtreleri temizlenir, iç ve dış üniteler incelenir ve cihazın çalışma
                    performansı değerlendirilir. Gerekli görülen durumlarda cihazın ilgili bölümlerinde temizlik ve
                    bakım işlemleri gerçekleştirilir.

                    <br />
                    <span className="desktopBreak"><br /></span>


                    Düzenli klima bakımı, cihazınızın daha verimli çalışmasına yardımcı olurken aynı zamanda
                    karşılaşılabilecek bazı arızaların önceden fark edilmesine de katkı sağlar. Klima bakımının
                    ihmal edilmesi ise zaman içerisinde performans kaybına ve daha yüksek enerji tüketimine yol
                    açabilir.

                    <br />
                    <span className="desktopBreak"><br /></span>


                    <b>Ev, ofis, iş yeri ve farklı yaşam alanlarında kullanılan klimalarınız</b> için bakım ve
                    temizlik hizmeti sunuyoruz. Her cihazın kullanım yoğunluğu ve mevcut durumu farklı olduğundan,
                    bakım işlemlerinde cihazın ihtiyaçlarını dikkate alarak hareket ediyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>


                    Klima bakımının yanı sıra cihazınızda meydana gelen performans kaybı, yeterli soğutmama,
                    kötü koku, su akıtma veya benzeri problemlerde de gerekli kontrolleri gerçekleştiriyoruz.
                    Sorunun kaynağını belirleyerek uygun çözüm için sizlere yardımcı oluyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>


                    <b>Bursa Klima Kombi</b> olarak amacımız; klimanızın daha temiz, verimli ve güvenilir şekilde
                    çalışmasına yardımcı olmak ve sizlere kaliteli teknik servis hizmeti sunmaktır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Klima bakım ve temizleme hizmeti hakkında detaylı bilgi almak ve servis talebinde bulunmak
                        için bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>

            <div className="KlimaBakimiCards">

                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Filtre Temizliği
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Klima filtrelerinde zaman içerisinde biriken toz ve kirler
                            temizlenerek cihazın hava akışının daha verimli olması sağlanır.
                        </Typography>
                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            İç Ünite Bakımı
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            İç ünitenin genel temizliği ve kontrolü yapılarak klimanın
                            daha sağlıklı ve verimli çalışmasına yardımcı olunur.
                        </Typography>
                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Dış Ünite Kontrolü
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Dış ünitenin genel durumu, fanı ve çalışma performansı
                            kontrol edilerek gerekli bakım işlemleri gerçekleştirilir.
                        </Typography>
                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Drenaj Temizliği
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Klima içerisinde oluşan suyun düzgün şekilde tahliye edilmesi
                            için drenaj hattı kontrol edilir ve gerekli temizlik yapılır.
                        </Typography>
                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Performans Kontrolü
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Klimanın çalışma performansı kontrol edilerek soğutma ve
                            genel çalışma durumunda herhangi bir problem olup olmadığı incelenir.
                        </Typography>
                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Genel Klima Bakımı
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Klimanın önemli parçaları genel olarak kontrol edilir ve
                            cihazın daha uzun süre verimli çalışmasına yardımcı olunur.
                        </Typography>
                    </CardContent>
                </Card>

            </div>

        </div>
    )
}

export default KlimaBakimi