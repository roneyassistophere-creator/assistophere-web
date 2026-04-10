'use client'
import { Footer } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

// Used for footer columns (each column has a `title` field)
export const ColumnRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Footer['columns']>[number]>()

  const label = data?.data?.title
    ? `Column ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data.data.title}`
    : `Column ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}

// Used for nav items and sub-links inside a column (each has a `link.label`)
export const RowLabel: React.FC<RowLabelProps> = () => {
  const data =
    useRowLabel<NonNullable<NonNullable<Footer['columns']>[number]['navItems']>[number]>()

  const label = data?.data?.link?.label
    ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data.data.link.label}`
    : `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}

// Used for sub-links (same shape as nav items)
export const SubLinkRowLabel: React.FC<RowLabelProps> = () => {
  const data =
    useRowLabel<
      NonNullable<
        NonNullable<NonNullable<Footer['columns']>[number]['navItems']>[number]['subLinks']
      >[number]
    >()

  const label = data?.data?.link?.label
    ? `Sub-link ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data.data.link.label}`
    : `Sub-link ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}
