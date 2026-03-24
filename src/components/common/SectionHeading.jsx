export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'mx-auto items-center text-center'
      : 'items-start text-left'

  return (
    <div className={`mb-10 flex max-w-3xl flex-col ${alignment}`}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  )
}
