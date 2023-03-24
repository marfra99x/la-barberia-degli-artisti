import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from "vuetify"

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4DAF51",
        secondary: "#B85C38",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: '#FAFAFA',
        anchor: '#0066CC'
      },
      dark: {
        primary: "#1976D2",
        secondary: "#fba92c",
        background: "#303030",
        anchor: '#CC6600'
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
