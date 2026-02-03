'use client'

import { Instagram, Facebook } from 'lucide-react'

export default function MeetTeam() {
  const topRow = [
    {
      id: 1,
      name: 'Prity D Sarkar',
      role: 'Psychologist',
      image: '/Prity_Dey.jpeg',
      social: {
        instagram: '#',
        facebook: '#'
      }
    },
    {
      id: 2,
      name: 'Ruma Chowdhury',
      role: 'Psychologist',
      image: '/Ruma_Chowdhury.jpeg',
      social: {
        instagram: '#',
        facebook: '#'
      }
    },
    {
      id: 3,
      name: 'Shilpa Das',
      role: 'Counsellor',
      image: '/Shilpa_Das.jpeg',
      social: {
        instagram: '#',
        facebook: '#'
      }
    },
    {
      id: 5,
      name: 'Diaana Tauqeer',
      role: 'Counsellor',
      image: '/Diaana.jpeg',
      social: {
        instagram: '#',
        facebook: '#'
      }
    }
  ]



  const TeamMemberCard = ({ member }) => (
    <div className="flex flex-col items-center group">
      {/* Image Container - Oval shaped */}
      <div className="mb-4 sm:mb-6 relative">
        <div className="w-36 h-48 sm:w-40 sm:h-52 md:w-48 md:h-60 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Role */}
      <div className="text-center mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-0.5 sm:mb-1">
          {member.name}
        </h3>
        <p className="text-secondary font-semibold text-xs sm:text-sm">
          {member.role}
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 sm:gap-4">
        <a
          href={member.social.instagram}
          aria-label={`${member.name} Instagram`}
          className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
        >
          <Instagram size={18} className="sm:w-5 sm:h-5" />
        </a>
        <a
          href={member.social.facebook}
          aria-label={`${member.name} Facebook`}
          className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
        >
          <Facebook size={18} className="sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  )

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-transparent via-secondary/5 to-transparent dark:via-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary">
            Meet The Team
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Our dedicated team of experienced psychologists and counsellors committed to your mental wellness journey
          </p>
        </div>

        {/* Top Row - 3 Members */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-4 md:gap-8 mb-8 md:mb-12">
          {topRow.map((member) => (
            <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 flex justify-center px-2 sm:px-0">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
