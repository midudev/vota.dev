interface SectionTitleProps {
  children?: string
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="mb-6 text-4xl font-bold text-center">{children}</h2>
)
