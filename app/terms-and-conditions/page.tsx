"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="bg-background">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            TURYA WELLNESS
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            Terms & Conditions
          </p>
          <div className="mt-4 h-px w-24 mx-auto bg-border" />
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <p>
            This is an agreement, mutually negotiated between the{" "}
            <strong>Counsellor</strong> and the <strong>Client</strong>, prior to
            the commencement of the Counselling Sessions. The Sessions are meant
            to assist and direct the Client in achieving their goals in work and
            personal life.
          </p>

          <p>
            It is hereby affirmed that all the Counsellors working at{" "}
            <strong>TURYA Wellness Counselling</strong> follow a strict code of
            professional ethics.
          </p>

          <hr />

          <h3>Confidentiality</h3>
          <p>
            Everything discussed between the Counsellor and the Client during
            the Sessions is strictly confidential. The organization may require
            Counsellors to discuss their work with supervisors from time to time.
            During such discussions, personal information of the Client shall
            not be disclosed.
          </p>

          <p>
            Any information received by supervisors shall be treated as
            confidential and subjected to the same ethical standards as the
            Counsellor.
          </p>

          <p>
            Express consent of the Client will be taken if information obtained
            during Sessions needs to be shared with a third party, except in the
            following circumstances:
          </p>

          <ol>
            <li>
              If the Client is under 18 years of age, parents or legal guardians
              may access records.
            </li>
            <li>When a case is transferred to another Counsellor.</li>
            <li>
              If the Client is reasonably suspected to be in danger of harming
              themselves or others.
            </li>
            <li>
              If the Client discloses abuse or neglect of children, elderly, or
              disabled persons.
            </li>
            <li>If the Client is part of a criminal proceeding.</li>
            <li>For legal or regulatory actions against a professional.</li>
            <li>Upon issuance of a court order or lawful subpoena.</li>
            <li>Where disclosure is otherwise legally required.</li>
          </ol>

          <h4>Important Note Regarding Confidentiality</h4>
          <p>
            If the Client is seeking any form of medical assistance, especially
            related to emotional difficulties, they are obligated to inform the
            Counsellor. The Counsellor will not communicate with any doctor
            without expressed permission from the Client.
          </p>

          <p>
            However, in the event of a reasonable indication of intent to cause
            self-harm or harm to others, confidentiality will not be maintained.
          </p>

          <hr />

          <h3>Access to Services</h3>
          <p>
            For scheduling, rescheduling, or cancellation of Sessions, the
            Client may contact:
          </p>

          <ul>
            <li>
              <strong>+91 62912 06580</strong>
            </li>
            <li>
              <strong>+91 93328 73513</strong>
            </li>
          </ul>

          <p>
            In case of an imminent crisis, please contact <strong>100</strong>{" "}
            or visit the nearest emergency room.
          </p>

          <p>
            If experiencing suicidal thoughts, immediately contact the{" "}
            <strong>AASRA 24×7 Suicide Helpline</strong> at{" "}
            <strong>+91-9820466726</strong>.
          </p>

          <hr />

          <h3>Sessions</h3>
          <ol>
            <li>
              Online video counselling sessions are conducted weekly for 50
              minutes each. Couples sessions are 90 minutes.
            </li>
            <li>
              Sessions are conducted via Google Meet; the link is shared prior
              to the appointment.
            </li>
            <li>
              Late arrivals will lose session time. If the Client does not join
              within 15 minutes, the session is considered a no-show.
            </li>
            <li>
              After the first session, future appointments are scheduled
              directly with the Counsellor.
            </li>
            <li>
              Clients must ensure a quiet, private environment and use
              headphones during sessions.
            </li>
            <li>
              Counselling does not include written medical prescriptions.
              Session summaries may be provided on request.
            </li>
            <li>
              Recommended minimum sessions: 4–7 for individuals, 8–10 for
              couples.
            </li>
            <li>
              Rescheduling requires a minimum of 2 hours’ notice; otherwise,
              the session may be forfeited without refund.
            </li>
            <li>
              If there is no communication for over 2 months, therapy is
              considered discontinued and restarting will be treated as a new
              case.
            </li>
            <li>
              A progress review may be conducted after the initial 4 sessions
              to determine continuation.
            </li>
          </ol>

          <hr />

          <h3>Cancellation & Refunds</h3>
          <ol>
            <li>
              Cancellations made at least 2 hours before the session are
              eligible for a 100% refund.
            </li>
            <li>
              Cancellations within 2 hours or no-shows will be charged 100% of
              the session fee.
            </li>
            <li>
              Rescheduling is subject to mutual availability of the Client and
              Counsellor.
            </li>
            <li>
              Any form of sexual harassment towards the Counsellor may result
              in immediate termination of the session without refund.
            </li>
          </ol>

          <hr />

          <h3>Data Protection Statement</h3>
          <ol>
            <li>
              Client records are kept confidential and accessible only to
              authorized personnel.
            </li>
            <li>
              Sensitive data may include gender, sexuality, ethnicity,
              political or religious beliefs, physical or mental health,
              relationship status, sexual life, and criminal records.
            </li>
            <li>
              Records are securely stored and retained for up to one year unless
              legally required otherwise.
            </li>
            <li>
              Digital records may be stored for up to three years before secure
              destruction.
            </li>
          </ol>

          <hr />

          <h3>Fees Structure</h3>
          <p>
            Counselling fees must be paid at least 24 hours prior to the
            scheduled appointment. Fees are subject to periodic review and may
            be updated annually.
          </p>
        </article>


      </section>
    </main>
  );
}
