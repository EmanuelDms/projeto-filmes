import Theme from "./ThemeProvider";

export default function Providers({ children }) {
  return (
    <>
      <Theme>
        {children}
      </Theme>
    </>
  )
}
