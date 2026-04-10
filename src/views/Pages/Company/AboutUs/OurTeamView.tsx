import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Page, TeamMember, Media } from '@/payload-types'
import { Users, Linkedin, CheckCircle2, Phone, Star } from 'lucide-react'

const DEPT_LABELS: Record<string, string> = {
  leadership: 'Leadership',
  operations: 'Operations',
  'guest-comms': 'Guest Communications',
  systems: 'Systems & Automation',
  marketing: 'Content & Marketing',
  admin: 'Finance & Admin',
  va: 'Virtual Assistance',
  other: 'Other',
}

const DEPT_COLOURS: Record<string, string> = {
  leadership: 'bg-primary/10 text-primary border-primary/20',
  operations: 'bg-secondary/10 text-secondary border-secondary/20',
  'guest-comms': 'bg-success/10 text-success border-success/20',
  systems: 'bg-info/10 text-info border-info/20',
  marketing: 'bg-warning/12 text-warning border-warning/20',
  admin: 'bg-base-300 text-base-content/60 border-base-300',
  va: 'bg-accent/10 text-accent border-accent/20',
  other: 'bg-base-300 text-base-content/60 border-base-300',
}

function getImageUrl(img: string | Media | null | undefined): string | null {
  if (!img || typeof img === 'string') return null
  return (img as Media).url ?? null
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const ini = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0].slice(0, 2)
  return ini.toUpperCase()
}

export const OurTeamView: React.FC<{ page: Page }> = async () => {
  const payload = await getPayload({ config })
  const { docs: allMembers } = await payload.find({
    collection: 'team-members',
    limit: 100,
    sort: 'order',
    where: { active: { equals: true } },
  })

  // Group by department
  const byDept = allMembers.reduce<Record<string, TeamMember[]>>((acc, m) => {
    const dept = m.department ?? 'other'
    if (!acc[dept]) acc[dept] = []
    acc[dept].push(m)
    return acc
  }, {})

  // Sort departments: leadership first, then alphabetically
  const deptOrder = ['leadership', 'operations', 'guest-comms', 'systems', 'marketing', 'admin', 'va', 'other']
  const sortedDepts = Object.keys(byDept).sort((a, b) => {
    const ai = deptOrder.indexOf(a)
    const bi = deptOrder.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes ot-fade-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ot-fade-1 { animation: ot-fade-up .5s ease both .10s; }
        .ot-fade-2 { animation: ot-fade-up .5s ease both .22s; }
        .ot-fade-3 { animation: ot-fade-up .5s ease both .34s; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-14 lg:pt-20 lg:pb-18">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[110px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="ot-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
            <Users className="w-4 h-4" /> Our Team · The People Behind Assistophere
          </div>
          <h1 className="ot-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-4">
            The Team That Runs{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Your STR Business
            </span>
          </h1>
          <p className="ot-fade-3 text-lg text-base-content/65 max-w-2xl mx-auto leading-relaxed">
            Every person on our team is trained, structured, and aligned to deliver consistent,
            professional results for our clients.
          </p>
          {allMembers.length > 0 && (
            <div className="ot-fade-3 flex justify-center gap-8 mt-8">
              <div>
                <p className="text-2xl font-extrabold text-primary">{allMembers.length}</p>
                <p className="text-xs text-base-content/50 mt-0.5">Team Members</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-primary">{sortedDepts.length}</p>
                <p className="text-xs text-base-content/50 mt-0.5">Departments</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-primary">UK</p>
                <p className="text-xs text-base-content/50 mt-0.5">Focused</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TEAM BY DEPARTMENT */}
      {allMembers.length > 0 ? (
        sortedDepts.map((dept) => (
          <section key={dept} className="py-14 lg:py-18 border-b border-base-200 last:border-b-0">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${DEPT_COLOURS[dept] ?? DEPT_COLOURS.other}`}>
                  {DEPT_LABELS[dept] ?? dept}
                </span>
                <span className="text-xs text-base-content/35">{byDept[dept].length} member{byDept[dept].length !== 1 ? 's' : ''}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {byDept[dept].map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-4 text-center text-base-content/40">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">No team members yet.</p>
            <p className="text-sm mt-1">Add team members in the CMS under &ldquo;About Us → Team Members&rdquo;.</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-base-200 border-t border-base-300 py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 via-base-200 to-secondary/12 border border-base-300 px-8 py-14 text-center shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">Want This Team Working For You?</h2>
            <p className="text-base-content/60 text-base max-w-lg mx-auto mb-7">
              Our team is structured to deliver across every part of your STR operation.
            </p>
            <button className="btn btn-primary btn-lg rounded-full px-10 gap-2 shadow">
              <Phone className="w-4 h-4" /> Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const imgUrl = getImageUrl(member.photo)

  return (
    <div className="bg-base-100 rounded-2xl border border-base-300 overflow-hidden flex flex-col">
      {imgUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imgUrl} alt={member.name} className="w-full h-52 object-cover object-top" />
      ) : (
        <div className="w-full h-52 bg-primary/8 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-extrabold">
            <Initials name={member.name} />
          </div>
        </div>
      )}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div>
          <p className="font-bold text-sm leading-snug">{member.name}</p>
          <p className="text-xs text-primary mt-0.5 font-medium">{member.role}</p>
        </div>
        {member.bio && (
          <p className="text-xs text-base-content/55 leading-relaxed line-clamp-3">{member.bio}</p>
        )}
        {member.highlights && member.highlights.length > 0 && (
          <ul className="space-y-1 mt-1">
            {member.highlights.map((h) => (
              <li key={h.id} className="flex items-center gap-1.5 text-xs text-base-content/60">
                <CheckCircle2 className="w-3 h-3 text-success shrink-0" /> {h.text}
              </li>
            ))}
          </ul>
        )}
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-auto pt-2"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
