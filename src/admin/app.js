import Logo from "/admin/src/assets/images/spark-icon.png";

export default {
  config: {
    auth: { logo: Logo },
    menu: { logo: Logo },
    head: { favicon: Logo },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Canoe",
        "app.components.LeftMenu.navbrand.workplace": "Intelligence",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap() {},
};