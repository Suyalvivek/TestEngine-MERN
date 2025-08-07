import AppRoutes from './shared/routes/AppRoutes'
import { ThemeProvider } from './components/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="test-engine-theme">
      <div className="min-h-screen">
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App