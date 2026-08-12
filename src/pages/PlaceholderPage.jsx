import { useLocation } from 'react-router-dom'

export default function PlaceholderPage() {
  const { pathname } = useLocation()

  return (
    <main className="placeholder-page">
      <div className="container">
        <p className="eyebrow">React migration</p>
        <h1>{pathname}</h1>
        <p>This route is reserved for the corresponding page from the existing static website. It will be migrated section by section without changing the approved design.</p>
      </div>
    </main>
  )
}
