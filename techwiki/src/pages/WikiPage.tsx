export default function WikiPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Wiki</h1>
      </div>
      <div className="bg-card rounded-lg p-8 border text-center">
        <p className="text-muted-foreground">Sélectionnez une page dans la sidebar ou créez-en une nouvelle.</p>
      </div>
    </div>
  )
}
