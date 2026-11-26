import { Check } from 'lucide-react'
import { useId, useState, type FormEvent } from 'react'
import journey from '../assets/images/cta-journey.webp'
import Reveal from './ui/Reveal.tsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const inputId = useId()
  const errorId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('error')
      return
    }
    // Front-end only for now: send `email` to your newsletter provider
    // (Mailchimp, Brevo, ConvertKit…) here before showing the success message.
    setStatus('success')
    setEmail('')
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-12 sm:py-28">
            <img
              src={journey}
              alt=""
              width={2000}
              height={1328}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/25 via-black/35 to-black/60" />

            <h2
              id="contact-title"
              className="mx-auto max-w-2xl text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-white sm:text-5xl"
            >
              Your next journey starts here.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/85">
              Hidden gems, travel stories and member-only deals. One email a month, never spam.
            </p>

            {status === 'success' ? (
              <p
                role="status"
                className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-base font-medium text-white ring-1 ring-white/30 backdrop-blur-md"
              >
                <Check className="size-5" aria-hidden />
                Thanks! You’re on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor={inputId} className="sr-only">
                  Email address
                </label>
                <input
                  id={inputId}
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? errorId : undefined}
                  className="h-12 min-w-0 rounded-full bg-white px-5 text-base text-ink placeholder:text-subtle sm:flex-1"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-full bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-hover active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            )}

            {status === 'error' && (
              <p id={errorId} role="alert" className="mt-3 text-sm font-medium text-white">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
