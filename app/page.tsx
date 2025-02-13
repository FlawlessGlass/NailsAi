import ImageUploader from './components/ImageUploader'
import NailDesignSelector from './components/NailDesignSelector'
import ResultPreview from './components/ResultPreview'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Nail Design App</h1>
      <div className="w-full max-w-5xl">
        <ImageUploader />
        <NailDesignSelector />
        <ResultPreview />
      </div>
    </main>
  )
}