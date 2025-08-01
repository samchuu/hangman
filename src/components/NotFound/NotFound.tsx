import { Link } from "react-router"

export default function NotFound() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-dvh text-white text-center mx-auto max-w-screen-md">
      <h1 className="text-2xl xl:text-4xl font-bold">404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="underline text-xl">
        Back to home
      </Link>
    </section>
  )
}
