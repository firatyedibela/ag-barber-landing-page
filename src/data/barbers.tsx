import type { Barber } from '../types';
import profileImage from '../assets/pp.png';

export const barbers: Barber[] = [
  {
    avatar: profileImage,
    name: 'Abidin Berber',
    title: 'Kıdemli Uzman Berber',
    introduction:
      '15 yıl önce kurduğu A&G Erkek Kuaförü’nü hâlâ aynı özen, aynı ustalık ve yılların tecrübesiyle yaşatıyor; her tıraşta bu birikimin izini hissettiriyor.',
    instagram: 'https://instagram.com',
    phone: '+905369932365',
  },
  {
    avatar: profileImage,
    name: 'Serkan Berber',
    title: 'Uzman Berber',
    introduction:
      'Çok genç yaşlarda başlayıp yıllar içinde ustalaştığı berberlik mesleğini, müşteri memnuniyetine verdiği önem ve tutkuyla sürdürüyor.',
    instagram: 'https://instagram.com',
    phone: '+905369932365',
  },
];
