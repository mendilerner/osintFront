import MyRouter from "./components/myrouter/MyRouter"
import { createTheme, ThemeProvider } from "@mui/material"
import { typographyStyle } from "./style"
import client from "./apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";

const theme = createTheme({
  typography: typographyStyle
})

function App() {
  

  return (
    <>
     <ApolloProvider client={client}>
    <ThemeProvider theme={theme}> 
    <MyRouter/>
    </ThemeProvider>
    </ApolloProvider>
    </>
  )
}

export default App
