import React from 'react'
import type { ContactBlock } from '@/payload-types'

export const ContactBlockComponent: React.FC<ContactBlock> = ({ email, phone }) => (
  <section className="py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p>Email: {email}</p>
      {phone && <p>Phone: {phone}</p>}
    </div>
  </section>
)
