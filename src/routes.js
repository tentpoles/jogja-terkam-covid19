import KulonProgo  from "./components/KulonProgo/KulonProgo";
import Bantul  from "./components/Bantul/Bantul";
import GunungKidul  from "./components/GunungKidul/GunungKidul";
import Sleman  from "./components/Sleman/Sleman";
import Yogyakarta  from "./components/Yogyakarta/Yogyakarta";
import HospitalDetail  from "./components/HospitalDetail";

const routes = [
    {
      path: "/kulon-progo",
      name: "Kulon Progo",
      component: KulonProgo,
      child: [
        {
          path: "/",
          name: "Kulon Progo Index"
        },
        {
          path: "/covid",
          name: "Kulon Progo Covid"
        },
        {
          path: "/non-covid",
          name: "Kulon Progo Non-Covid"
        },
      ],
    },
    {
      path: "/bantul",
      name: "Bantul",
      component: Bantul,
      child: [
        {
          path: "/",
          name: "Bantul Index"
        },
        {
          path: "/covid",
          name: "Bantul Covid"
        },
        {
          path: "/non-covid",
          name: "Bantul Non-Covid"
        },
      ],
    },
    {
      path: "/gunung-kidul",
      name: "Gunung Kidul",
      component: GunungKidul,
      child: [
        {
          path: "/",
          name: "Gunung Kidul Index"
        },
        {
          path: "/covid",
          name: "Gunung Kidul Covid"
        },
        {
          path: "/non-covid",
          name: "Gunung Kidul Non-Covid"
        },
      ],
    },
    {
      path: "/sleman",
      name: "Sleman",
      component: Sleman,
      child: [
        {
          path: "/",
          name: "Sleman Index"
        },
        {
          path: "/covid",
          name: "Sleman Covid"
        },
        {
          path: "/non-covid",
          name: "Sleman Non-Covid"
        },
      ],
    },
    {
      path: "/kota-yogyakarta",
      name: "Kota Yogyakarta",
      component: Yogyakarta,
      child: [
        {
          path: "/",
          name: "Kota Yogyakarta Index"
        },
        {
          path: "/covid",
          name: "Kota Yogyakarta Covid"
        },
        {
          path: "/non-covid",
          name: "Kota Yogyakarta Non-Covid"
        },
      ],
    },
    {
      path: "/hospitalid=:hospitalid&type=:typeid",
      name: "Hospital Detail",
      component: HospitalDetail,
    },
];

export default routes;
