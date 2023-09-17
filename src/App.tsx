import React, { FC } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import Header from './components/Header/Header'
import EditZone from './features/EditZone/EditZone'
import Preview from './features/Preview/Preview'
import ToolBar from './features/ToolBar/ToolBar'
import { styles } from './styles'

const defaultTheme = createTheme()

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth={false} sx={styles.wrapper}>
        <Header title={'REACT EDITOR Test'} />
        <main style={styles.main}>
          <ToolBar />
          <EditZone />
          <Preview />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
