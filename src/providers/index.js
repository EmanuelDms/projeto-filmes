import Helmet from "./Helmet";
import Theme from "./ThemeProvider";

export default function Providers({ children }) {
  return (
    <Theme>
      <Helmet />
      {children}
    </Theme>
  )
}
