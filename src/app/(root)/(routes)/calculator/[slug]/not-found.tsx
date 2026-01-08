import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primaryDefault mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Calculator niet gevonden</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          De calculator die u zoekt bestaat niet of is niet meer beschikbaar.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/calculator"
            className="px-6 py-3 bg-primaryDefault text-white rounded-lg hover:bg-green-800 transition-colors"
          >
            Alle calculators
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-primaryDefault text-primaryDefault rounded-lg hover:bg-green-50 transition-colors"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}
