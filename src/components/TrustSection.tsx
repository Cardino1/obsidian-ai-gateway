
const TrustSection = () => {
  const logos = [
    { name: "Harvard University", width: "w-32" },
    { name: "Stanford", width: "w-28" },
    { name: "MIT", width: "w-24" },
    { name: "Google", width: "w-28" },
    { name: "Microsoft", width: "w-32" },
    { name: "Apple", width: "w-24" },
    { name: "Tesla", width: "w-28" },
    { name: "Amazon", width: "w-32" },
    { name: "IBM", width: "w-20" },
    { name: "Oracle", width: "w-28" },
    { name: "Salesforce", width: "w-32" },
    { name: "Meta", width: "w-24" }
  ];

  return (
    <section className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            They Trust Us
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Leading organizations worldwide rely on our AI architecture solutions
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 mx-8 ${logo.width} h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm`}
              >
                <span className="text-white/60 font-semibold text-sm whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 mx-8 ${logo.width} h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm`}
              >
                <span className="text-white/60 font-semibold text-sm whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
