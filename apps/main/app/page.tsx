import Home from '../components/Home';
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    </main>
  )
}

