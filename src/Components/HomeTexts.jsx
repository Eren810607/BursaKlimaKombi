import React from 'react'
import '../css/home.css'
import HomePageImage from "../images/klimaTamir.png";


function HomeTexts() {
    return (
        <div>




            <div className='mainTextBox'>
                <h2 className='HomepageTitle'>Bursa Klima Kombi Olarak | Ne Yapıyoruz?</h2>
                <div className='HomePageImageDiv'>

                    <img className='HomePageImage' src={HomePageImage} alt="" />
                </div>

                <br />

                <p className='HomepageText2'>
                    Klima ve kombi bakımı, petek temizleme, beyaz eşya tamiri, arıza tespiti, onarım ve parça değişimi alanlarında profesyonel teknik servis hizmeti sunuyoruz. Ev ve iş yerlerinizde ihtiyaç duyduğunuz teknik servis desteğini hızlı, güvenilir ve titiz bir şekilde sağlıyor; cihazlarınızın daha verimli ve sorunsuz çalışmasına yardımcı oluyoruz.
                    <br /><br />
                    Klima ve kombilerinizin periyodik bakım ve kontrollerini gerçekleştiriyor, petek temizleme işlemleriyle ısıtma sistemlerinizin verimliliğini artırıyoruz. Bunun yanında buzdolabı, çamaşır makinesi, bulaşık makinesi ve diğer beyaz eşyalarınızda meydana gelen arıza ve teknik sorunların tespitini, onarımını ve gerekli durumlarda parça değişimini gerçekleştiriyoruz.
                    <br /><br />
                    Bursa genelinde kaliteli işçilik, doğru arıza tespiti ve müşteri memnuniyetini ön planda tutarak hizmet veriyoruz. Cihazınızda meydana gelen bir arıza için destek almak, bakım yaptırmak veya detaylı bilgi edinmek için bizimle iletişime geçebilirsiniz.
                    <br /><br />

                    <b>Bursa Klima Kombi</b> | Teknik servis ihtiyaçlarınız için güvenilir çözüm ortağınız.
                    <br /><br />
                </p>






            </div>



        </div>
    )
}

export default HomeTexts