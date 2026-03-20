'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = React.useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="inline-block mb-8">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turya-logo-Itp5x35pA5RSuDpSUWTNtjCyAqGjht.png" 
                alt="TURYA Logo" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight mb-3">
              Terms & Conditions
            </h1>
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <p className="text-base text-primary font-medium tracking-wide uppercase text-sm">
                TURYA Wellness
              </p>
              <div className="h-1 w-8 bg-primary rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Please read these terms carefully. By accessing our services, you agree to be bound by these conditions. We're committed to providing professional, confidential, and ethical counselling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-base text-foreground leading-relaxed mb-4">
            This is a mutual agreement between the <span className="font-semibold">Counsellor</span> and <span className="font-semibold">Client</span>, established prior to commencing counselling sessions. Our sessions are designed to assist you in achieving your personal and professional goals.
          </p>
          <p className="text-base text-foreground leading-relaxed">
            All counsellors at <span className="font-semibold">TURYA Wellness Counselling</span> adhere to strict professional ethics and confidentiality standards.
          </p>
        </div>

        {/* Confidentiality Section */}
        <section className="mb-16 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-10 bg-primary rounded-full group-hover:h-12 transition-all duration-300"></div>
            <h2 className="text-3xl font-light text-foreground tracking-tight">Confidentiality</h2>
          </div>
          
          <div className="space-y-6 ml-4">
            <div>
              <p className="text-base text-foreground font-medium mb-3">Core Principles</p>
              <ul className="space-y-2.5">
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>All information shared during sessions remains strictly confidential</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Supervisors discussing your case will maintain the same confidentiality standards</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Personal information is never disclosed in supervisory discussions</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-foreground font-medium mb-3">When Confidentiality May Be Breached</p>
              <p className="text-sm text-muted-foreground mb-3">Express consent is required unless exceptional circumstances apply:</p>
              <ul className="space-y-2.5">
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Client is under 18 — parents or legal guardians may access records</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Case transfer to another counsellor</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Reasonable suspicion of self-harm or harm to others</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Disclosure of abuse or neglect of vulnerable populations</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Client involvement in criminal proceedings</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Legal or regulatory actions against a professional</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Court orders or lawful subpoenas</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Where legally required by law</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-6">
              <p className="text-sm font-semibold text-foreground mb-2">Important Notice</p>
              <p className="text-sm text-foreground">If seeking medical assistance for emotional difficulties, you must inform the counsellor. We will not contact any doctor without your expressed permission. However, confidentiality will not be maintained if there is reasonable indication of intent to cause self-harm or harm to others.</p>
            </div>
          </div>

          <div className="h-px bg-border my-12"></div>
        </section>

        {/* Access to Services */}
        <section className="mb-16 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-10 bg-primary rounded-full group-hover:h-12 transition-all duration-300"></div>
            <h2 className="text-3xl font-light text-foreground tracking-tight">Access to Services</h2>
          </div>

          <div className="space-y-6 ml-4">
            <div>
              <p className="text-base text-foreground font-medium mb-3">Scheduling & Support</p>
              <ul className="space-y-2.5">
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Contact <span className="font-semibold">+91 62912 06580</span> for scheduling and rescheduling</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Call <span className="font-semibold">+91 93328 73513</span> for cancellations and inquiries</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-foreground font-medium mb-3">Emergency Resources</p>
              <ul className="space-y-2.5">
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Imminent crisis: Contact <span className="font-semibold">100</span> or visit nearest emergency room</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>Suicidal thoughts: Call <span className="font-semibold">AASRA 24×7 Helpline</span> at <span className="font-semibold">+91-9820466726</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-border my-12"></div>
        </section>

        {/* Sessions */}
        <section className="mb-16 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-10 bg-primary rounded-full group-hover:h-12 transition-all duration-300"></div>
            <h2 className="text-3xl font-light text-foreground tracking-tight">Sessions</h2>
          </div>

          <div className="ml-4 space-y-2.5">
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Weekly online video sessions: 50 minutes for individuals, 90 minutes for couples</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Conducted via Google Meet with link shared prior to appointment</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Late arrivals lose session time; no-show if not joined within 15 minutes</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Future appointments scheduled directly with your counsellor after first session</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Ensure quiet, private environment with headphones during sessions</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Counselling does not include medical prescriptions; summaries available upon request</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Recommended minimum: 4–7 sessions for individuals, 8–10 for couples</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Rescheduling requires 2 hours' notice; otherwise session may be forfeited</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>No contact for 2+ months = therapy discontinued; restarting treated as new case</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Progress review may be conducted after initial 4 sessions</span>
            </div>
          </div>

          <div className="h-px bg-border my-12"></div>
        </section>

        {/* Cancellation & Refunds */}
        <section className="mb-16 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-10 bg-primary rounded-full group-hover:h-12 transition-all duration-300"></div>
            <h2 className="text-3xl font-light text-foreground tracking-tight">Cancellation & Refunds</h2>
          </div>

          <div className="ml-4 space-y-2.5">
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Cancellations 2+ hours before session: 100% refund eligible</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Cancellations within 2 hours or no-shows: 100% session fee charged</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Rescheduling subject to mutual availability</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Sexual harassment towards counsellor results in immediate session termination with no refund</span>
            </div>
          </div>

          <div className="h-px bg-border my-12"></div>
        </section>

        {/* Data Protection */}
        <section className="mb-16 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-10 bg-primary rounded-full group-hover:h-12 transition-all duration-300"></div>
            <h2 className="text-3xl font-light text-foreground tracking-tight">Data Protection Statement</h2>
          </div>

          <div className="ml-4 space-y-2.5">
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Client records kept confidential and accessible only to authorized personnel</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Sensitive data includes: gender, sexuality, ethnicity, beliefs, health status, relationships, and criminal records</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Physical records securely stored and retained up to one year unless legally required otherwise</span>
            </div>
            <div className="flex gap-3 text-foreground">
              <span className="text-primary font-semibold mt-0.5">•</span>
              <span>Digital records stored up to three years before secure destruction</span>
            </div>
          </div>

          <div className="h-px bg-border my-12"></div>
        </section>

        {/* Fees Structure */}
        <section className="mb-20 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-10 bg-primary rounded-full group-hover:h-12 transition-all duration-300"></div>
            <h2 className="text-3xl font-light text-foreground tracking-tight">Fees Structure</h2>
          </div>

          <div className="ml-4">
            <ul className="space-y-2.5">
              <li className="flex gap-3 text-foreground">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span>Payment required 24 hours prior to scheduled appointment</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span>Fees subject to periodic review and annual updates</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="border-t border-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-background via-background to-primary/5 px-6 py-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-b-lg">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-foreground">TURYA Wellness Counselling</p>
            <p className="text-xs text-muted-foreground mt-1">Last updated: March 2026</p>
            <p className="text-xs text-muted-foreground">For questions, please contact our office</p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/85 active:bg-primary/95 transition-all duration-200 text-sm font-semibold shadow-md hover:shadow-lg"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
