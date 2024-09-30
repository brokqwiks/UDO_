import { TonConnectUIProvider } from "@tonconnect/ui-react"
import { VisitingPage } from "../pages/visitingPage/ui/visitingPage"

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://githubraw.com/brokqwiks/UDO_-Visit/main/manifest.json">
    <div>
        <VisitingPage />
    </div>
    </TonConnectUIProvider>
 
  )
}

export default App
