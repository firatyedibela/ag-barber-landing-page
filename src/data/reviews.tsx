import type { Review } from '../types';
import metehan from '../assets/review-avatars/metehan-ar.png';
import ahmet from '../assets/review-avatars/ahmet-berkay-yevimli.png';
import ali from '../assets/review-avatars/ali-can.png';
import emre from '../assets/review-avatars/emre-kumsal.png';
import yunus from '../assets/review-avatars/yunus-emre-hıdır.png';

export const reviews: Review[] = [
  {
    id: 1,
    avatar: metehan,
    owner: 'Metehan Ar',
    stars: 5,
    timeAgo: 'bir ay önce',
    review:
      'Müşteriye karşı ilgi alaka çok iyi güler yüzlü bir abimiz işinde çok iyi',
    href: 'https://share.google/MQ3Jga3uLhGvTAvRH',
  },
  {
    id: 2,
    avatar: ahmet,
    owner: 'Ahmet Berkay Yevimli',
    stars: 5,
    timeAgo: '3 yıl önce',
    review: 'Mamak ta en guzel temiz erkek kuaförü AG erkek kuaförü',
    href: 'https://share.google/dyTmAkDY32dd17UR9',
  },
  {
    id: 3,
    avatar: ali,
    owner: 'Ali Can',
    stars: 5,
    timeAgo: '3 yıl önce',
    review: 'Çok başarılı bir kuaför tavsiye ediyorum',
    href: 'https://share.google/gzQONMhnIlLgdRcUl',
  },
  {
    id: 4,
    avatar: emre,
    owner: 'Emre Kumsal',
    stars: 5,
    timeAgo: '2 yıl önce',
    review: 'ADAM HAKINI VERIYOR ELİNE SAĞLIK ABİDİN USTA 👍',
    href: 'https://share.google/pPrd20gDAc1HGcZy0',
  },
  {
    id: 5,
    avatar: yunus,
    owner: 'Yunus Emre Hıdır',
    stars: 5,
    timeAgo: 'bir yıl önce',
    review: 'İşinin ehli',
    href: 'https://share.google/ifpwZRisZk6Jo6jE7',
  },
];
