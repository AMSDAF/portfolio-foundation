import type { ReactNode } from "react";
import Link from "next/link";
import { siteContent, siteNavigation } from "@/config/site";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-canvas">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <Link
            className="font-semibold tracking-tight text-content focus-visible:outline"
            href="/"
          >
            {siteContent.title}
          </Link>

          <nav aria-label="Navegação principal">
            <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-content-muted">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="rounded-sm underline-offset-4 hover:text-content hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1" id="main-content">
        {children}
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-content-muted">
          <p>{siteContent.title}</p>
        </div>
      </footer>
    </div>
  );
}
