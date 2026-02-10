'use client'

import Image from 'next/image'

type TeamMember = {
  id: number
  name: string
  role: string
  qualification: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Prity D Sarkar',
    role: 'Psychologist',
    qualification: 'PGD (Counselling),  MA (Psychology)',
    image: '/Prity_Dey.jpeg',
  },
  {
    id: 2,
    name: 'Ruma Chowdhury',
    role: 'Psychologist',
    qualification: 'MSc (Psychology)',
    image: '/Ruma_Chowdhury.jpeg',
  },
  {
    id: 3,
    name: 'Shilpa Das',
    role: 'Psychologist',
    qualification: 'MA (Psychology)',
    image: '/Shilpa_Das.jpeg',
  },
  {
    id: 4,
    name: 'Diaana Tauqeer',
    role: 'Counsellor',
    qualification: 'BA (Psychology)',
    image: '/Diaana.jpeg',
  },
]

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="
        group relative
        flex flex-col items-center text-center
        rounded-2xl
        p-5 sm:p-6
        bg-background/80 backdrop-blur
        border border-border/50
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative mb-4">
        <div
          className="
            relative
            w-28 h-36
            sm:w-32 sm:h-40
            md:w-36 md:h-44
            rounded-2xl overflow-hidden
            border-2 border-primary/40
            transition-all duration-300
            group-hover:scale-105
          "
        >
          <Image
            src={member.image || '/placeholder.svg'}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary leading-tight">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
        {member.role}
      </p>

      {/* Qualification */}
      <p className="text-xs sm:text-sm text-primary/80 font-semibold">
        {member.qualification}
      </p>
    </div>
  )
}

export default function MeetTeam() {
  return (
    <section
      className="
        py-12 sm:py-16 md:py-24
        px-4 sm:px-6 lg:px-16
        bg-gradient-to-b
        from-transparent via-secondary/5 to-transparent
        dark:via-primary/5
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-3">
            Our Therapist
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced psychologists and counsellors are here to support
            your mental wellness journey with care and compassion.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4 sm:gap-6 md:gap-8
          "
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
