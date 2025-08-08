import type { Service } from '../types';
import haircutIcon from '../assets/services/haircut.svg';
import beardIcon from '../assets/services/beard.svg';
import hairdryerIcon from '../assets/services/hair-dryer.svg';
import faceIcon from '../assets/services/face.svg';
import eyebrowIcon from '../assets/services/eyebrow.svg';

export const services: Service[] = [
  {
    icon: haircutIcon,
    title: 'Saç Kesimi ve Bakımı',
    description:
      'Alanında uzman ekibimizle, yüz hatlarınıza ve tarzınıza uygun modern saç kesimi ve bakım hizmetleri sunuyor, sizi her daim bakımlı ve özgüvenli hissettirmeyi amaçlıyoruz.',
  },
  {
    icon: beardIcon,
    title: 'Sakal Kesimi ve Bakımı',
    description:
      'Sakal sadece bir stil değil, bakımlı görünümün tamamlayıcısıdır. Düzenli kesim ve bakım ile hem sağlıklı bir görünüm hem de taze bir his sunuyoruz.',
  },
  {
    icon: hairdryerIcon,
    title: 'Fön ve Şekillendirme',
    description:
      'Saçınıza hacim ve hareket katmak için profesyonel fön ve şekillendirme hizmeti sunuyoruz. Günlük ya da özel günlerde size en iyi görünümü kazandırıyoruz.',
  },
  {
    icon: faceIcon,
    title: 'Yüz Bakımı',
    description:
      'Cildinizi tazelemek ve sağlıklı bir görünüm kazandırmak için profesyonel yüz bakımı uyguluyoruz. Temizlik, canlandırma ve bakım bir arada bu hizmette.',
  },
  {
    icon: eyebrowIcon,
    title: 'Kaş Bakımı ve Şekillendirme',
    description:
      'Kaş kesimi ve şekillendirme ile yüz hatlarınız ön plana çıkarılır, doğal ve dengeli bir görünüm sağlanır. Herkes için özenle yapılan bu hizmet, ifadenize tazelik katar.',
  },
];
