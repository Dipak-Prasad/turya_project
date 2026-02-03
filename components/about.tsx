export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 text-balance">
              Professional Care for Your Well-being
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At{" "}
              <span className="font-semibold text-foreground">
                Turya Wellness
              </span>
              , we believe mental health is just as important as physical
              health. Our mission is to make quality mental healthcare
              accessible, affordable, and judgment-free.
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              We connect you with licensed therapists specializing in anxiety,
              depression, stress, relationships, and personal growth. Every
              session is confidential, secure, and personalized for you.
            </p>

            <div className="space-y-4">
              {[
                "Licensed & Verified Therapists",
                "Evidence-Based Therapy",
                "Flexible Online Sessions",
                "100% Confidential & Secure",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (EYE-CATCHY) */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] shadow-xl">
            <img
              src="https://www.shutterstock.com/image-photo/hands-therapist-checklist-counselling-advice-600nw-2557820831.jpg"
              alt="Happy mental wellness counseling"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm font-semibold text-foreground">
                🌿 Trusted by 1000+ Clients
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
