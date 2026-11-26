import Reveal from './Reveal.tsx'

interface SectionHeadingProps {
  id: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

/** Apple-style two-tone heading: a bold statement followed by a softer grey line. */
export default function SectionHeading({
  id,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <h2
        id={id}
        className="text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-5xl"
      >
        {title}
        {subtitle && <span className="text-subtle"> {subtitle}</span>}
      </h2>
    </Reveal>
  )
}
