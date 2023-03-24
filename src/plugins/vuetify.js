import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from "vuetify"

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#FFFFFF",
        secondary: "#B85C38",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: '#FAFAFA',
        anchor: '#0066CC'
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
