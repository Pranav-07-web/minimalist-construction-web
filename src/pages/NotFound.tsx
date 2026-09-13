import { motion } from "framer-motion";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col bg-background text-foreground"
    >
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="w-full max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-foreground/40" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Error 404
            </span>
          </div>
          <h1 className="mt-8 text-6xl font-medium tracking-tight sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            The page you requested doesn&apos;t exist or has been moved. Head
            back to the homepage to explore our services and past projects.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex h-11 items-center justify-center rounded-sm bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
